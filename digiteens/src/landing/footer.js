import React from 'react'
import styled from 'styled-components'
import {FaYoutube,FaInstagram,FaFacebook} from 'react-icons/fa'

const Footer = () => {
    const size = 32;
  return (
    <Container>
        <ButtonGroup>
            <a href="https://m.facebook.com/Digiteens-Unravelling-The-Bits-106205405392525/" className="iconButton"><FaFacebook size={size}/></a>
            <a href="https://www.instagram.com/digiteens_/" className="iconButton"><FaInstagram size={size}/></a>
            <a href="#" className="iconButton"><FaYoutube size={size}/></a>
        </ButtonGroup>
        <FooterText>
            ©Copyright. All Rights Reserved.
        </FooterText>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ButtonGroup = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-evenly;
    padding: 10px 50px;
`
const FooterText = styled.span`
    font: 1rem;
    font-family: Amiko;
    font-weight: 400;
    color: white;
    letter-spacing: 2px;
    text-align: center;
    padding: 20px 0 0 0;
`

export default Footer