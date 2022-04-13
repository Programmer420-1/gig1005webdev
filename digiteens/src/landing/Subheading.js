import React from 'react'
import styled from "styled-components"

const Subheading = () => {
  return (
    <Container>
        <p>digiteens</p>
    </Container>
  )
}

const Container = styled.div`
    font-family: Amiko;
    font-size: 1.8rem;
    font-weight: 400;
    letter-spacing: 4px;
    color: white;
    text-align: left;

    @media(max-width : 1007px){
        font-size : 1.55rem;
        text-align: center;
    }

    @media(max-width : 610px){
        font-size: 1.3rem;
    }
`

export default Subheading