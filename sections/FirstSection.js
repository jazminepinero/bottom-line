import React from 'react'
import styled from 'styled-components'



function FirstSection() {
  const H1 = styled.h1`
  display: flex;
  margin: 20px;
  padding: 20px;
  `;
    return (
        <div>
        <H1>You do the tough stuff.
        <br /> We'll do the bookkeeping.</H1>
        </div>
    )
}

export default FirstSection
