import React from 'react'
import styled from "styled-components"
import NavItem from './navItem'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import DropDown from './DropDown'
import Logo from "../commons/Logo"

const NavBar = ({ isScrolled }) => {
    // track menu is pressed
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {
                isOpen ? <DropDown /> : null
            }
            {!isOpen ? <MenuButton onClick={() => {
                setIsOpen(!isOpen);
            }} /> : <CloseButton onClick={() => {
                setIsOpen(!isOpen);
            }} />}
            <NavList isScrolled={isScrolled}>
                <Logo />
                <NavItem pageName="Home" />
                <NavItem pageName="Event" />
                {/* <NavItem pageName="Leaderboard" /> */}
                <NavItem pageName="Gallery" />
                <NavItem pageName="FAQ" />
                <NavItem pageName="About us" />
                <NavItem pageName="Department Photo" />
            </NavList>
        </>

    )
}

const MenuButton = styled(FaBars)`
    display: none;
    color: white;
    transition: all 0.5s ease-in-out;
    z-index: 9999;

    @media(max-width:768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 2rem;
        cursor: pointer;
    }

    &:hover{
        color: #12FFC9;
    }
`

const CloseButton = styled(IoClose)`
    display: none;
    color: white;
    transition: all 0.5s ease-in-out;
    z-index: 9999;

    @media(max-width:768px){
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 2.2rem;
        cursor: pointer;
    }

    &:hover{
        color: #12FFC9;
    }
`

const NavList = styled.div`
    width : 70vw;
    padding : 25px 0 0 30px;
    display: flex;
    justify-content : space-evenly;
    align-items: center;
    color: white;
    letter-spacing : 5px;
    font-size : 0.9rem;
    font-weight : 600;
    position: fixed;
    z-index: 9999;
    transform: ${props => props.isScrolled ? "translateY(-100%)" : "translateY(0%)"};
    transition: transform 0.5s ease-in-out;

    @media(max-width : 1007px){
        width : 100vw;
        padding: 40px;
    }

    @media(max-width: 768px){
        display:none;
    }

`

export default NavBar