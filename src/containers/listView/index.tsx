import styled from "styled-components"
import { useState,useEffect } from "react";
import {lists} from "../data";
import {FiPlus, FiMinus,FiArrowRight,FiArrowDown} from "react-icons/fi"
import {ViewContainer,ViewBox,ViewTitle,ViewDescription,ViewButtons,Btn} from "./listViewStyles"


const ListView = () => {

    const [clicked, setClicked] = useState(0)
    const [lists, setList] = useState([])
    const toggle = index =>{
        if (clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }

    useEffect(() => {
       const datafetch = async ()=>{
        const response = await fetch('http://localhost:8080/data');
        const json = await response.json();
        // console.log(json);
        setList(json)
       }
       datafetch()
    }, [])

  return (
    <ViewContainer>{lists.map((items, index) => 
    {
        return(
            <ViewBox key={items.Title}>
                <ViewTitle onClick={()=> toggle(index)} key ={index}>
                    <span style={{paddingRight:"15px"}}> {clicked === index ? <FiArrowDown/> : <FiArrowRight/>}</span>
                    {items.Title}  
                </ViewTitle>
                {clicked === index ? (
                <>
                    <ViewDescription>
                        {items.Description}
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