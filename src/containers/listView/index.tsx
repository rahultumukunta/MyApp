import styled from "styled-components"
import { useState,useEffect } from "react";
// import {lists} from "../data";
import {FiPlus, FiMinus,FiArrowRight,FiArrowDown} from "react-icons/fi"

import {ViewContainer,ViewBox,ViewTitle,ViewDescription,ViewButtons,Btn} from "./listViewStyles"

// require('dotenv').config()

const ListView = () => {

    const [clicked, setClicked] = useState(0)
    const [lists, setList] = useState([])
    const toggle = index =>{
        if (clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }
    const urll=process.env.URl
    console.log("env",urll)

    useEffect(() => {
        const datafetch = async ()=>{
            const response = await fetch("http://localhost:8080/studFormDetails");
            const data = await response.json();
            console.log(data);
            setList(data)
       }
       datafetch()
    }, [])

  return (
    <ViewContainer>{lists.map((items, index) => 
    {
        return(
            <ViewBox key={items.FirstName}>
                <ViewTitle onClick={()=> toggle(index)} key ={index}>
                    <span style={{paddingRight:"15px"}}> {clicked === index ? <FiArrowDown/> : <FiArrowRight/>}</span>
                    {items.LastName + " " + items.FirstName} 
                </ViewTitle>
                {clicked === index ? (
                <>
                    <ViewDescription>
                        Name : {items.LastName + " " + items.FirstName}
                        <div/>
                        Email : {items.Email}
                        <div/>
                        Department : {items.Department}
                    </ViewDescription>
                    <ViewButtons>
                        <Btn>Dataset Information</Btn>
                        <Btn>View Dashboard</Btn>
                    </ViewButtons>
                </>
                ) : "" }
            </ViewBox>
        );
    }
    )}
    </ViewContainer>
  )
}

export default ListView