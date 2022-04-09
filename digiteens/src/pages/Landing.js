import React from 'react'
import styled from "styled-components"
import NavBar from '../commons/navbar'
import Home from '../landing/Home'
import Timeline from '../landing/Timeline'

const landing = () => {
  return (
    <Container>
        <NavBar/>
        <Home />
        <Test />
        <Test1 />
        <Test2 />
        <Test3 />
        <Test4 />
        <Test5 />
        <Footer />
        <TimelineContainer>
            <Timeline />
        </TimelineContainer>
    </Container>
  )
}


const Container = styled.div`
    height : 100vh;
    width : 100vw;
    overflow-x:hidden;
    position: relative;
    background-color : #0A2729;
`

const Test = styled.div`
    height : 100vh;
    width : 100vw;
    margin-top : 100vh;
    position: absolute;
    background-color : #FF0000;
    opacity:0.5;
`
const Test1 = styled.div`
    height : 100vh;
    width : 100vw;
    margin-top : 200vh;
    position: absolute;
    background-color : #00FF00;
    opacity:0.5;
`
const Test2 = styled.div`
    height : 100vh;
    width : 100vw;
    margin-top : 300vh;
    position: absolute;
    background-color : #FF0000;
    opacity:0.5;
`
const Test3 = styled.div`
    height : 100vh;
    width : 100vw;
    margin-top : 400vh;
    position: absolute;
    background-color : #00FF00;
    opacity:0.5;
`
const Test4 = styled.div`
    height : 100vh;
    width : 100vw;
    margin-top : 500vh;
    position: absolute;
    background-color : #FF0000;
    opacity:0.5;
`

const Test5 = styled.div`
    height : 100vh;
    width : 100vw;
    margin-top : 600vh;
    position: absolute;
    background-color : #00FF00;
    opacity:0.5;
`

const Footer = styled.div`
    height : 50vh;
    width : 100vw;
    margin-top : 700vh;
    position: absolute;
    background-color : #00FF00;
    opacity:0.5;
`

const TimelineContainer = styled.div`
    overflow: hidden;
    position : absolute;
    margin : 14.5rem 0 0 10.5rem;

    @media(max-width : 1007px){
        display : none;
        margin: 0;
    }
`

export default landing