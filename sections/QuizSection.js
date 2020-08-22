import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const CenterDiv = styled.div`
text-align: center;
`;




const H3 = styled.h3`
text-align: center;
margin: 10px;
font-family: optima;
  
`;





function QuizSection() {
    return (
        <>
        <CenterDiv>
            <H3>Bookkeeping is Annoying.</H3>
            </CenterDiv>

            <CenterDiv>
            <H3>That's why were here 😉</H3>
           
        </CenterDiv>
        <CenterDiv>
            <img src="/speaker.png" />
        </CenterDiv>
        <CenterDiv>
            <p>1. Fill out our Questionnairre</p>
        </CenterDiv>
        
    </>
    )

}

export default QuizSection
