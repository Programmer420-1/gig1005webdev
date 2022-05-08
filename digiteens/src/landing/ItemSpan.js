import React from 'react'
import styled from 'styled-components'



const ItemSpan = ({ index, name, isActive, topMargin = true }) => {

  return (
    <DecoratedItem isActive={isActive} topMargin={topMargin} onClick={() => {
      window.scrollTo({ top: index * Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0), behavior: "smooth" });
    }}>
      {name}
    </DecoratedItem>
  )
}

const DecoratedItem = styled.span`
    font-family: Amiko;
    opacity: ${props => props.isActive ? '1' : '0.4'};
    color: white;
    letter-spacing: 3px;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: left;
    margin-top: ${props => props.topMargin ? '0.9rem' : '0'};
    background-color: transparent;
    transition: opacity 0.4s ease-in-out;
    cursor: pointer;

    &:hover{
      opacity:1;
    }
    
    @media(max-width : 1007px){
        opacity: 0.6;
        margin: 0;
        display: ${props => props.isActive ? 'block' : 'none'};
        animation: float 3s ease-in-out infinite;
    }
`

export default ItemSpan