import React from 'react'
import styled from 'styled-components'

const EventPopUp = ({name,date, index}) => {
  return (
    <div class={"pop-up "+"pop-up"+index}>
        <Name>{name}</Name>
        <Date>{date}</Date>
    </div>
  )
}

const Name = styled.span`
    font-family: Amiko;
    font-size: 1.2rem;
    text-align: left;
    font-weight: 600;
`

const Date = styled.span`
    font-family: Amiko;
    font-sise: 0.8rem;
    text-align: left;
    font-weight: 400;
`

export default EventPopUp