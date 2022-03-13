import styled from "styled-components"
import Link from "next/link"
import {HeaderContainer, HeaderLinks} from "./headerStyle"


const PrimaryHeader = () => {
  return (
    <HeaderContainer>
        <div>
            <Link href="/" passHref> 
                <HeaderLinks>Templars</HeaderLinks>
            </Link>
        </div>
        <div>
            <Link href="/" passHref> 
                <HeaderLinks>Home</HeaderLinks>
            </Link>
            <Link href="/page1" passHref> 
                <HeaderLinks>Page1</HeaderLinks>
            </Link>
            <Link href="/page2" passHref> 
                <HeaderLinks>Page2</HeaderLinks>
            </Link>
            <Link href="/page3" passHref> 
                <HeaderLinks>Page3</HeaderLinks>
            </Link>
        </div>
    </HeaderContainer>
  )
}

export default PrimaryHeader