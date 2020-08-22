import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Section = styled.section`
  text-align: center;
  color: white;
  background: ${props => props.background};
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
box-shadow: 0px 10px 14px -7px #276873;
background:linear-gradient(to bottom, lightblue 5%, cornflowerblue 100%);
margin: 12px;
background-color:#599bb3;
border-radius:8px;
cursor:pointer;
color:#ffffff;
font-size:20px;
font-weight:bold;
padding:13px 32px;
text-decoration:none;
text-shadow:0px 1px 0px #3d768a;
 &:hover {
  background:linear-gradient(to bottom, cornflowerblue 5%, lightblue 100%);
	background-color:#408c99;
      }
`;


function FirstSection() {
  

    return (
        <div>
        <Section background="cornflowerblue">
        <H1>In over your head?
        <br /> Let us get to the Bottom Line of your books!</H1>
        <h2>Get started today for a CPA experience at an Accountant Price.</h2>
        <P>At Bottom Line Bookkeeping we take the hassle out of your books. 
          <br />We're affordable & fast, because we know you have a business to run.
          <br /> Just fill out our Bookkeeping questionaire below to get down to the bottom line.</P>
          <Link href="/Form">
            <StyledButton> Get Started</StyledButton>
          </Link>
        </Section>
        </div>
    )
}

export default FirstSection
