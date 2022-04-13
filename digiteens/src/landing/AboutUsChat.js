import React from 'react'
import styled from 'styled-components'

const AboutUsChat = ({content, isSender, delay}) => {
  return (
    <Container isSender={isSender} delay={delay}>
        <ChatBubble isSender={isSender}>
            <Content>
                {content}
            </Content>
        </ChatBubble>
    </Container>
  )
}


const Container = styled.div`
    margin: 1rem 0.5rem;
    display: flex;
    justify-content: ${props=>props.isSender?"flex-start":"flex-end"};
    
    @media(max-width: 1007px){
        margin: 0.8rem 5rem;
    }

`
const ChatBubble = styled.div`
    background-color: ${props=>props.isSender?"transparent":"#106466"};
    color: ${props=>props.isSender?"#106466":"#FFFFFF"};
    border-radius: ${props=>props.isSender?"10px 10px 10px 0px":"10px 10px 0px 10px"};
    border: ${props=>props.isSender?"1.5px solid #106466":"0px solid transparent"};
    padding: 1rem 1.5rem;
    text-align: ${props=>props.isSender?"left":"right"};
    max-width: 50vw;

    @media(max-width: 1007px){
        max-width: 60vw;
    }

    @media(max-width: 768px){
        width: 100vw;
        max-width:100vw;
        text-align: ${props=>props.isSender?"center":"justify"};
        border-radius: 10px 10px 10px 10px;
    }

    @media(max-width:576px){
        width: 100vw;
        max-width:100vw;
        padding: 0.8rem 1.1rem;
        text-align: center;
        border-radius: 10px 10px 10px 10px;
    }
`
const Content = styled.span`
    font-family: Amiko;
    font-size: 0.9rem;
    letter-spacing: 2px;

    @media(max-width: 768px){
       font-size: 0.8rem;
       letter-spacing: 1.5px;
    }
`
 

export default AboutUsChat