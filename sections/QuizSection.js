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
        <CenterDiv>
            <H3>We're available when you need us.</H3>
            <p>At Bottom Line Bookkeeping we pride ourselves at always being ready to discuss your books. You can guarantee that we are never automated. You are always talking to a human. We're also obsessed with small businesses. </p>
        </CenterDiv>
    )
}

export default QuizSection
