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
                        <AboutUsChat delay={0.75} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel morbi sit magna arcu nullam. Aenean sapien sit turpis lorem" isSender={false} />
                    </SwipeContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SwipeContainer>
                        <AboutUsChat delay={1.25} content="Who are us?" isSender={true} />
                        <AboutUsChat delay={1.25} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel morbi sit magna arcu nullam." isSender={false} />
                    </SwipeContainer>
                </SwiperSlide>
                <SwiperSlide>
                    <SwipeContainer>
                        <AboutUsChat delay={1.75} content="Who are us?" isSender={true} />
                        <AboutUsChat delay={1.75} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel morbi sit magna arcu nullam. Aenean sapien sit turpis lorem.consectetur adipiscing elit. Vel morbi sit magna arcu nullam.consectetur adipiscing elit. Vel morbi sit magna arcu nullam" isSender={false} />
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