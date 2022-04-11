import React from 'react'
import tw, { styled } from 'twin.macro'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { Container } from '@mui/material';
import NavBar from '../commons/navbar';
const data = [
    {
        'Question': 'Question 1',
        'Answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae malesuada sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur porta mollis tellus, a pharetra arcu. Cras finibus ac odio nec tempor. Phasellus accumsan eu magna quis porta. Sed varius nibh at magna consequat, eget feugiat sapien accumsan. In lorem purus, gravida ut ex ac, vehicula tempor mi. Nullam vel convallis sapien, eget congue nisi. Sed congue feugiat mauris, et faucibus libero ullamcorper sit amet. Sed faucibus nisi ipsum, id fringilla ligula accumsan at. Maecenas et nisi quis mauris elementum porttitor. Curabitur arcu sem, sollicitudin non arcu sed, semper sollicitudin sapien. Integer malesuada sapien nibh, id feugiat ipsum pellentesque at. Vestibulum pretium facilisis magna, et gravida enim convallis ac. In faucibus enim non enim efficitur, vel bibendum lectus vehicula.'
    },
    {
        'Question': 'Question 2',
        'Answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae malesuada sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur porta mollis tellus, a pharetra arcu. Cras finibus ac odio nec tempor. Phasellus accumsan eu magna quis porta. Sed varius nibh at magna consequat, eget feugiat sapien accumsan. In lorem purus, gravida ut ex ac, vehicula tempor mi. Nullam vel convallis sapien, eget congue nisi. Sed congue feugiat mauris, et faucibus libero ullamcorper sit amet. Sed faucibus nisi ipsum, id fringilla ligula accumsan at. Maecenas et nisi quis mauris elementum porttitor. Curabitur arcu sem, sollicitudin non arcu sed, semper sollicitudin sapien. Integer malesuada sapien nibh, id feugiat ipsum pellentesque at. Vestibulum pretium facilisis magna, et gravida enim convallis ac. In faucibus enim non enim efficitur, vel bibendum lectus vehicula.'
    },
    {
        'Question': 'Question 3',
        'Answer': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae malesuada sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur porta mollis tellus, a pharetra arcu. Cras finibus ac odio nec tempor. Phasellus accumsan eu magna quis porta. Sed varius nibh at magna consequat, eget feugiat sapien accumsan. In lorem purus, gravida ut ex ac, vehicula tempor mi. Nullam vel convallis sapien, eget congue nisi. Sed congue feugiat mauris, et faucibus libero ullamcorper sit amet. Sed faucibus nisi ipsum, id fringilla ligula accumsan at. Maecenas et nisi quis mauris elementum porttitor. Curabitur arcu sem, sollicitudin non arcu sed, semper sollicitudin sapien. Integer malesuada sapien nibh, id feugiat ipsum pellentesque at. Vestibulum pretium facilisis magna, et gravida enim convallis ac. In faucibus enim non enim efficitur, vel bibendum lectus vehicula.'
    }

]


function QnA() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <>
            <NavBar />
            <MyContainer className='pt-10 lg:pt-36' style={{ minHeight: `100vh` }}>
                <Container>
                    <p className='text-2xl font-bold text-center'><span className='firstLetter'>F</span>REQUENTLY <span className='firstLetter'>A</span>SKED <span className='firstLetter'>Q</span>UESTIONS</p>
                <Wrapper>
                    <Accordion>
                        {data.map((item, i) => (
                            <div className='item'>
                                <Title onClick={() => toggle(i)}>
                                    <p>{item.Question}</p>
                                    {selected === i ? <RemoveIcon /> : <AddIcon />}
                                </Title>
                                <div className={selected === i ? 'content show' : 'content'}>
                                    <p>{item.Answer}</p>
                                </div>
                            </div>
                        ))}
                    </Accordion>
                </Wrapper>
                </Container>
                
            </MyContainer>
        </>

    )
}

export default QnA

const MyContainer = styled.div`
    background-image: url('./images/qnaBackground.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const Wrapper = styled.div`
    ${tw`flex justify-center items-center`}
    min-height: 100%;
    color: #106466;
    
`
const Accordion = styled.div`
    ${tw`p-10 text-left lg:p-20 h-full`}
`
const Title = styled.div`
    ${tw`cursor-pointer text-xl font-semibold p-5 flex justify-between`}
    background: #106466;
    color: #D2E9E3;

    &:hover{
        background: #12FFC9;
        color: #106466;
    }
`