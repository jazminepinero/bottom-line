import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Section = styled.section`
  color: white;
  background: ${props => props.background};
  text-align: center;
`

  const H1 = styled.h1`
  margin: 20px;
  padding: 15px;
 
  font-family: optima;
  font-size: 55px;
  `;
  const P = styled.p`
  margin: 20px;
  padding: 15px;
  
  font-size: 20px;
  font-family: candara;
`;



const StyledButton = styled.button`
    color: cornflowerblue;
    background-color: white;
    margin: 10px;
    padding: 0px
    &:hover {
      background-color: cornflowerblue;
      }
`;


function FirstSection() {
  

    return (
        <div>
        <Section background="cornflowerblue">
        <H1>In over your head?
        <br /> Leave the bookkeeping to us.</H1>
        <P>At Bottom Line Bookkeeping we take the hassle out of your books. 
          <br />We're affordable & fast, because we know you have a business to run.</P>
          <Link href="/Form">
            <StyledButton> tell us more about your books</StyledButton>
          </Link>
        </Section>
        </div>
    )
}

export default FirstSection
