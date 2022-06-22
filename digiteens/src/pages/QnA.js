import React from 'react'
import tw, { styled } from 'twin.macro'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect} from 'react'
import { Container } from '@mui/material';
import NavBar from '../commons/navbar';
const data = [
    {
        'Question': 'What is the venue of the program',
        'Answer': 'The program will be held virtually via Microsoft Teams. The link will be sent to you upon registration. '
    },
    {
        'Question': 'How many weeks will the program be running for?',
        'Answer': 'The program will run in the form of 4 modules that will take place in 4 consecutive weeks starting on the 21st of May.'
    },
    {
        'Question': 'If I miss 1 module, can I still participate in the others?',
        'Answer': 'Yes, all modules will run independently of each other and will not require you to commit in totality.'
    },
    {
        'Question': 'Is it only open to UM students or outsiders as well?',
        'Answer': 'It is open to everyone regardless of whether you are a UM student or not.'
    }

]


function QnA() {
    const [selected, setSelected] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        }
        //scroll detection
        window.addEventListener("scroll", handleScroll, true);

        return ()=>{
            window.removeEventListener("scroll", handleScroll, true);
        }
    },[]);

    return (
        <>
            <NavBar isScrolled={isScrolled}/>
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
    background-image: url('/assets/images/qnaBackground.png');
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