import React from 'react'
import styled, {keyframes} from "styled-components"
import { fadeInDown } from 'react-animations'
import NavItem from './navItem'
const DropDown = () => {
    
    return (
        <Container>
            <NavItem pageName="Home" />
            <NavItem pageName="Event" />
            <NavItem pageName="Leaderboard" />
            <NavItem pageName="Gallery" />
            <NavItem pageName="FAQ" />
            <NavItem pageName="About us" />
        </Container>
    )
}

const fadeInDownAnimation = keyframes`${fadeInDown}`;

const Container = styled.div`
    animation: 0.3s ${fadeInDownAnimation};
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    width: 100vw;
    padding: 5rem 0;
    background-color: black;
    z-index:9999;
    opacity: 0.9;
    color: white;
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: 4px;


    @media(min-width :769px){
        display:none;
    }
`

export default DropDown