import React from 'react'
import Lighting from './Lighting'
import styled from 'styled-components'
import Heading from '../landing/Heading'
import Subheading from './Subheading'

const Home = () => {
    return (
        <SVGContainer>
            <LightingContainer>
                <Lighting width="90%" />
            </LightingContainer>
            <HeadingContainer>
                <Subheading />
                <Heading />
            </HeadingContainer>
        </SVGContainer>
    )
}

const SVGContainer = styled.div`
    width : 100vw;
    height: 100vh;
    position :absolute;
    padding-top : 1rem;
    padding-left: 2.5rem;
    overflow: hidden;

    @media(max-width : 1007px){
        padding: 1rem 0 0 0;
        justify-content: center;
    }
`


const LightingContainer = styled.div`
    position : absolute;
    
    @media(max-width : 1007px){
        width: 100vw;
        padding-left: 2.5rem;
    }
`

const HeadingContainer = styled.div`
    height: 100vh;
    margin-top: 15rem;
    margin-left: 34rem;
    justify-content: left;

    @media(max-width : 1007px){
        width: 100vw;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

`
export default Home