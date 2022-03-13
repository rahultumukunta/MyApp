import styled from "styled-components"


export const ViewContainer = styled.div`
    width : 100%;
    height : fit-content;
    /* background-color: #D3D3D3; */
    padding: 10px;
    /* margin: 10px; */
    margin-left: 0%;
    border-radius: 10px;
    /* overflow-y: auto; */
    overflow: hidden;
`

export const ViewBox = styled.div`
    width : 95%;
    height : fit-content;
    /* background-color: blue; */
    padding: 10px;
    /* margin: 10px; */
    border-radius: 10px;
`

export const ViewTitle = styled.div`
    width : 100%; 
    height: 50px;
    background-color: skyblue;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    font-size: 17px;
    padding-top: 15px;
    padding-left: 20px;
    
`

export const ViewDescription = styled.div`
    width : 100%; 
    height: 150px;
    background-color: white;
    font-size: 17px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding-left: 20px;
`
export const ViewButtons = styled.div`
    width : 100%; 
    height: 60px;
    background-color: skyblue;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding-left: 20px;
`

export const Btn = styled.button`
    height: fit-content;
    width: fit-content;
    margin-top: 11px;
    margin-left: 30px;
    padding: 3px;
    border-radius: 6px;
    background-color: burlywood;
    color: black;
`