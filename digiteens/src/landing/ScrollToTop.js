import React from 'react'
import styled from 'styled-components'
import { FaArrowAltCircleUp } from 'react-icons/fa'


const ScrollToTop = ({ isScrolled, onClick }) => {
    return (
        <Container isScrolled={isScrolled} onClick={onClick}><FaArrowAltCircleUp size={38} /></Container>
    )
}

const Container = styled.div`
    color : white;
    transition: all 0.4s ease-in-out;
    position: fixed;
    z-index: 9999;
    top: 90vh;
    left: 90%;
    margin: 0 1rem 0 0;
    opacity: 0.3;
    transform: ${props => props.isScrolled ? "rotate(0deg)" : "rotate(180deg)"};
    
    &:hover{
        color: #ffffff;
        opacity: 1;
    }
`

export default ScrollToTop
