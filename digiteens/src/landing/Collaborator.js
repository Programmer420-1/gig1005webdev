import React from 'react'
import styled from 'styled-components'

const Collaborator = ({ name, imagelink, width, index }) => {
    return (
        <Container width={width}>
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

    .colabImage{
        width: ${props => props.width}rem;
        // background-color: white;
        z-index: 99999;
    }

    .name{
        opacity: 1;
        font-size: 1.4rem;
        margin-top: 1rem;
        letter-spacing: 3px;
        font-family: Amiko;
        font-weight: 600;
    }
`

export default Collaborator