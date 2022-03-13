import styled from "styled-components"

export const HeaderContainer = styled.nav`
    height: 70px;
    background-color: #152238;
    color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 27px;
    font-size : 18px;
`
export const HeaderLinks = styled.a`
    padding: 0rem  2rem ;
    color: red;

    &:hover{
        color: green;
    }
` 