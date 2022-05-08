import React from 'react'
import styled from 'styled-components'

const Collaborator = ({ name, imagelink }) => {
    return (
        <Container width={14}>
            <img class="colabImage" src={imagelink} alt={name} />
            <div class="name">{name}</div>
        </Container>
    )
}



const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    .colabImage{
        width: ${props => props.width}rem;
        background-color: white;
        border-radius: 10px;
    }

    .name{
        opacity: 1;
        font-size: 1.4rem;
        margin: 1rem 0;
        letter-spacing: 3px;
        font-family: Amiko;
        font-weight: 600;
    }

    &:hover {
        transform: translatey(-15px);
    }

    @media(max-width :768px){
        .colabImage{
            width: ${props => props.width*0.8}rem;
            background-color: white;
        }

        .name{
            opacity: 1;
            font-size: 1rem;
            margin: 1rem 0;
            letter-spacing: 3px;
            font-family: Amiko;
            font-weight: 600;
        }
    

    }
`

export default Collaborator