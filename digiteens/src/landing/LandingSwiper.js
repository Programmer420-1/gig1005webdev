import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import AboutUsChat from '../landing/AboutUsChat'
import styled from 'styled-components'

const LandingSwiper = ({ vh }) => {
    return (
        <Container>
            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                loop={false}
                autoplay={true}
                speed={500}
            >
                <SwiperSlide>
                    <SwipeContainer>
                        <AboutUsChat delay={0.75} content="Who are us?" isSender={true} />
                        <AboutUsChat delay={0.75} content="We are a group of year 1 Universiti Malaya students who are trying to promote the digitisation of our society." isSender={false} />
                    </SwipeContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SwipeContainer>
                        <AboutUsChat delay={1.25} content="What is this event about?" isSender={true} />
                        <AboutUsChat delay={1.25} content="This event will expose you to the must-know information in this progressively digitalised world." isSender={false} />
                    </SwipeContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SwipeContainer>
                        <AboutUsChat delay={1.75} content="Who supported us in this event?" isSender={true} />
                        <AboutUsChat delay={1.75} content="This event is launched successfully  with the support from Meta and UM Stem Centre." isSender={false} />
                    </SwipeContainer>
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}

const SwipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

const Container = styled.div`
position: relative;
height: 38vh;
width: 60vw;
left: 0;
opacity: 0;
    @media(max-width : 1007px){
        opacity: 1;
        width:100vw;
        left: 0;
        padding: 0 4rem;
        justify-content: center;
    }

    .swiper-slide{
        background:transparent;
    }
`

export default LandingSwiper