import { useState} from 'react'

import { FormContainer, SubmitButton, FormInput, FormEmailInput ,InputTitle, RadioButton, RadioTitle,InputTitleBox } from './formStyles'
const StudentForm = () => {
    const [firstName, setFirstName] = useState("default")
    const [lastName, setLastName] = useState("default")
    const [email, setEmail] = useState("default")
    const [radioValue, setRadioValue] = useState("CSE")

    const FirstNameHandler = (event) =>{
        setFirstName(event.target.value)
    }

    const LastNameHandler = (event) =>{
        setLastName(event.target.value)
    }

    const EmailHandler = (event) =>{
        setEmail(event.target.value)
    }

    const SubmitHandler = () =>{
        console.log("name ", firstName)
        console.log("name ", lastName)
        console.log("email ", email)
        console.log("department ", radioValue)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({ FirstName : firstName, LastName : lastName, Email : email, Department : radioValue })
        };
        const datafetch = async ()=>{
            const response = await fetch('http://localhost:8080/registerStudForm',requestOptions);
            const data = await response.json();
            console.log(data);
       }
       datafetch()
    }

    const RadioCSEHandler = () =>{
        setRadioValue("CSE")
    }

    const RadioITHandler = () =>{
        setRadioValue("IT")
    }

    const RadioECEHandler = () =>{
        setRadioValue("ECE")
    }

    const RadioEEEHandler = () =>{
        setRadioValue("EEE")
    }

  return (
    <>
        <FormContainer>
            <h2 style={{paddingLeft: "130px",marginBottom:"20px"}}>Registration Form</h2>
            <form onSubmit={SubmitHandler}>
                <InputTitleBox>
                <InputTitle>First Name</InputTitle>
                <InputTitle style={{paddingLeft: "130px"}}>Last Name</InputTitle>
                </InputTitleBox>
                <div/>
                <FormInput placeholder='First Name' onChange={FirstNameHandler}></FormInput>
                <FormInput style={{marginLeft: "20px"}} placeholder='Last Name' onChange={LastNameHandler}></FormInput>
                <div/>
                <InputTitle >Email Address</InputTitle>
                <div/>
                    <FormEmailInput placeholder='Email' onChange={EmailHandler}></FormEmailInput>
                <div/>
                <InputTitle>Department</InputTitle>
                    <RadioButton type="radio" checked={radioValue === "CSE"} onChange={RadioCSEHandler}/>
                    <RadioTitle> CSE </RadioTitle>
                    <div/>
                    <RadioButton type="radio" checked={radioValue === "IT"} onChange={RadioITHandler}/>
                    <RadioTitle> IT </RadioTitle>
                    <div/>
                    <RadioButton type="radio" checked={radioValue === "ECE"} onChange={RadioECEHandler}/>
                    <RadioTitle> ECE </RadioTitle>
                    <div/>
                    <RadioButton type="radio" checked={radioValue === "EEE"} onChange={RadioEEEHandler}/>
                    <RadioTitle> EEE </RadioTitle>
                <div/>
                <SubmitButton>Submit</SubmitButton>
            </form>
        </FormContainer>
    </>
  )
}

export default StudentForm