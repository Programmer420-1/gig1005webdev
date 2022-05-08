import React from 'react'
import styled from "styled-components"
import NavBar from '../commons/navbar'
import Home from '../landing/Home'
import Timeline from '../landing/Timeline'
import { useState, useEffect, useRef } from 'react'
import SectionBar from '../landing/SectionBar'
import AboutUsChat from '../landing/AboutUsChat'
import Fade from 'react-reveal/Fade'
import EventPopUp from '../landing/EventPopUp'
import Collaborator from '../landing/Collaborator'
import Footer from '../landing/footer'
import LandingParticle from '../landing/landingParticle'
import ReactTypingEffect from 'react-typing-effect'
import ScrollToTop from '../landing/ScrollToTop'
import LandingSwiper from '../landing/LandingSwiper'
import LinearTimeline from '../landing/LinearTimeline'


const Container = styled.div`
    height : 515vh;
    width : 100%;
    overflow-x: hidden;
    position: relative;
    background-color : #0A2729;
`

const AboutUs = styled.div`
    width: 70vw;
    left: 10vw;
    display: flex;
    flex-direction: column;

    @media(max-width : 1007px){
        width: 100vw;
        left: 0;
    }
`
const TimelineDots = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`
const CollaboratorContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 80vw;
    padding-right: 12rem;

    @media(max-width : 1007px){
        padding-right: 0rem;
        padding: 2rem 4rem;
        width: 100vw;
    }    
`

const Collaborators = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 3rem 0 0 0 ;

    @media(max-width : 768px){
        flex-direction: column;
        height: 70vh;
    }
`

const Title = styled.span`
    letter-spacing: 3px;
    margin: 5rem 0 2rem 0;
    text-align: center; 
    font-family: Amiko; 
    font-weight: 600;
    font-size: 2rem;
    color: white; 
    display: block;

    @media(max-width : 768px){
        font-size: 1.5rem;
        margin:0;
    }
    `

const JoinContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: end;
`

const JoinButton = styled.div`    
    padding: 0.3rem 1.5rem;
    width: 90px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    letter-spacing: 3px;
    font-weight; 400;
    color: #12FFC9;
    border: 1.5px solid #12FFC9;
    background-color: #0A2729;
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: #12FFC9;
        color: #0A2729;
    }

`

const Join = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    margin-bottom: 28vh;

    span{
        color: white;
        font-family: Amiko;
        letter-spacing: 2px;
    }
    `

const ButtonGroup = styled.div`
        display: flex;
        width: 100%;
        padding: 20px 0;
        justify-content: space-evenly;
    `

const TimelineContainer = styled.div`
    overflow: hidden;
    position : absolute;
    margin : 14.5rem 0 0 6.5rem;
    animation-fill-mode: forwards;

    @media(max-width : 1007px){
        display : none;
        margin: 0;
    }
`


const Landing = () => {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
    };

    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    const isOverflown = (element) => {
        return element.scrollHeight > element.clientHeight;
    }

    const homeRef = useRef();
    const testRef = useRef();
    const test1Ref = useRef();
    const test2Ref = useRef();
    const test3Ref = useRef();

    const [whichVisible, setWhichVisible] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [swiperOn, setSwiperOn] = useState(false);


    useEffect(() => {
        // sidebar
        var path = document.querySelector('.timeline');
        var dot1 = document.querySelector('.dot1');
        var dot2 = document.querySelector('.dot2');
        var dot3 = document.querySelector('.dot3');
        var dot4 = document.querySelector('.dot4');
        var dot5 = document.querySelector('.dot5');
        var dot6 = document.querySelector('.dot6');
        var popup1 = document.querySelector('.pop-up1');
        var popup2 = document.querySelector('.pop-up2');
        var popup3 = document.querySelector('.pop-up3');
        var popup4 = document.querySelector('.pop-up4');
        var popup5 = document.querySelector('.pop-up5');
        var popup6 = document.querySelector('.pop-up6');
        var toTop = document.querySelector('.toTop');

        // to top
        toTop.addEventListener("click", () => {
            if (window.scrollY > 0) {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
            else {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                });
            }
        });

        //scroll detection
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        });

        // window resize events
        window.addEventListener('resize', (e) => {
            vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
            vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            if (vh < 675) setSwiperOn(true)
            else setSwiperOn(false)
        });


        const homeObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) setWhichVisible("welcome");
            path.style.cssText = "stroke-dasharray: 1;stroke-dashoffset: 0.8;";
            dot1.style.cssText = "r:0%";
            dot2.style.cssText = "r:0%";
            dot3.style.cssText = "r:0%";
            dot4.style.cssText = "r:0%";
            dot5.style.cssText = "r:0%";
            dot6.style.cssText = "r:0%";
            popup1.style.cssText = "opacity:0;";
            popup2.style.cssText = "opacity:0;";
            popup3.style.cssText = "opacity:0;";
            popup4.style.cssText = "opacity:0;";
            popup5.style.cssText = "opacity:0;";
            popup6.style.cssText = "opacity:0;";
        }, options);

        const AboutUsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) setWhichVisible("about us");
            path.style.cssText = "stroke-dasharray: 1;stroke-dashoffset: 0.8;";
            dot1.style.cssText = "r:0%";
            dot2.style.cssText = "r:0%";
            dot3.style.cssText = "r:0%";
            dot4.style.cssText = "r:0%";
            dot5.style.cssText = "r:0%";
            dot6.style.cssText = "r:0%";
            popup1.style.cssText = "opacity:0;";
            popup2.style.cssText = "opacity:0;";
            popup3.style.cssText = "opacity:0;";
            popup4.style.cssText = "opacity:0;";
            popup5.style.cssText = "opacity:0;";
            popup6.style.cssText = "opacity:0;";
        }, options);

        const timelineObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setWhichVisible("timeline");
                path.style.cssText = "stroke-dasharray: 1;stroke-dashoffset: 0.8;animation: dash 4s linear forwards;";
                dot1.style.cssText = "r:0%; animation: zoomIn 0.5s ease-in-out 0.8s forwards;";
                dot2.style.cssText = "r:0%; animation: zoomIn 0.5s ease-in-out 1.6s forwards;";
                dot3.style.cssText = "r:0%; animation: zoomIn 0.5s ease-in-out 2s forwards;";
                dot4.style.cssText = "r:0%; animation: zoomIn 0.5s ease-in-out 2.5s forwards;";
                dot5.style.cssText = "r:0%; animation: zoomIn 0.5s ease-in-out 2.85s forwards;";
                dot6.style.cssText = "r:0%; animation: zoomIn 0.5s ease-in-out 3.5s forwards;";
                popup1.style.cssText = "top:6.5rem;" + "left:" + (parseInt(dot1.getAttribute('cx')) + popup1.offsetWidth - 10) + "px;" + "opacity:0; animation: fadeDown 0.5s ease-in-out 0.80s forwards;";
                popup2.style.cssText = "top:14rem;" + "left:" + (parseInt(dot2.getAttribute('cx'))) + "px;" + "opacity:0; animation: fadeLeft 0.5s ease-in-out 1.60s forwards;";
                popup3.style.cssText = "top:15rem;" + "left:" + (parseInt(dot3.getAttribute('cx')) + popup3.offsetWidth - 10) + "px;" + "opacity:0; animation: fadeUp 0.5s ease-in-out 2.00s forwards;";
                popup4.style.cssText = "top:10rem;" + "left:" + (parseInt(dot4.getAttribute('cx')) + popup4.offsetWidth - 10) + "px;" + "opacity:0; animation: fadeUp 0.5s ease-in-out 2.50s forwards;";
                popup5.style.cssText = "top:23rem;" + "left:" + (parseInt(dot5.getAttribute('cx')) + popup5.offsetWidth - 10) + "px;" + "opacity:0; animation: fadeUp 0.5s ease-in-out 2.85s forwards;";
                popup6.style.cssText = "top:19.5rem;" + "left:" + (parseInt(dot6.getAttribute('cx')) + popup6.offsetWidth - 10) + "px;" + "opacity:0; animation: fadeUp 0.5s ease-in-out 3.50s forwards;";
            }
        }, options);

        const test2Observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setWhichVisible("sponsors");
                path.style.cssText = "stroke-dasharray: 1;stroke-dashoffset: 0.47;animation: dash1 4s linear forwards;";
                dot1.style.cssText = "r:0.4%";
                dot2.style.cssText = "r:0.4%";
                dot3.style.cssText = "r:0.4%";
                dot4.style.cssText = "r:0.4%";
                dot5.style.cssText = "r:0.4%";
                dot6.style.cssText = "r:0.4%";
                popup1.style.cssText = "top:4.5rem;" + "left:" + (parseInt(dot1.getAttribute('cx')) + popup1.offsetWidth - 10) + "px;" + "opacity:1";
                popup2.style.cssText = "top:14rem;" + "left:" + (parseInt(dot2.getAttribute('cx'))) + "px;" + "opacity:1";
                popup3.style.cssText = "top:15rem;" + "left:" + (parseInt(dot3.getAttribute('cx')) + popup3.offsetWidth - 10) + "px;" + "opacity:1";
                popup4.style.cssText = "top:10rem;" + "left:" + (parseInt(dot4.getAttribute('cx')) + popup4.offsetWidth - 10) + "px;" + "opacity:1";
                popup5.style.cssText = "top:23rem;" + "left:" + (parseInt(dot5.getAttribute('cx')) + popup5.offsetWidth - 10) + "px;" + "opacity:1";
                popup6.style.cssText = "top:19.5rem;" + "left:" + (parseInt(dot6.getAttribute('cx')) + popup6.offsetWidth - 10) + "px;" + "opacity:1";
            }
        }, options);

        const test3Observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setWhichVisible("join us");
                path.style.cssText = "stroke-dasharray: 1;stroke-dashoffset: 0.3;animation: dash2 3s linear forwards;";
            }
        }, options);


        homeObserver.observe(homeRef.current);
        AboutUsObserver.observe(testRef.current);
        timelineObserver.observe(test1Ref.current);
        test2Observer.observe(test2Ref.current);
        test3Observer.observe(test3Ref.current);
    }, []);

    return (
        <Container>
            <NavBar isScrolled={isScrolled} />
            <SectionBar current={whichVisible} />
            <span class="toTop">
                <ScrollToTop isScrolled={isScrolled} />
            </span>
            <LandingParticle />
            <TimelineContainer>
                <Timeline />
            </TimelineContainer>
            <section ref={homeRef} className="section snap-start snap-always">
                <Home />
            </section>
            <section ref={testRef} className="section1 snap-start snap-always">
                {swiperOn || vh < 675
                    ? <LandingSwiper vh={vh} />
                    : <AboutUs>
                        <div>
                            <Fade left><AboutUsChat delay={0.75} content="Who are us?" isSender={true} /></Fade>
                            <Fade right><AboutUsChat delay={0.75} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel morbi sit magna arcu nullam. Aenean sapien sit turpis lorem" isSender={false} /></Fade>
                            <Fade left><AboutUsChat delay={1.25} content="Who are us?" isSender={true} /></Fade>
                            <Fade right><AboutUsChat delay={1.25} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel morbi sit magna arcu nullam." isSender={false} /></Fade>
                            <Fade left><AboutUsChat delay={1.75} content="Who are us?" isSender={true} /></Fade>
                            <Fade right><AboutUsChat delay={1.75} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel morbi sit magna arcu nullam. Aenean sapien sit turpis lorem.consectetur adipiscing elit. Vel morbi sit magna arcu nullam.consectetur adipiscing elit. Vel morbi sit magna arcu nullam" isSender={false} /></Fade>
                        </div>
                    </AboutUs>}
            </section>
            <section ref={test1Ref} className="section2 snap-start snap-always">

                <LinearTimeline />
                <TimelineDots>
                    <EventPopUp name="Event 1" date="08/04/2022" index="1" />
                    <EventPopUp name="Event 2" date="08/04/2022" index="2" />
                    <EventPopUp name="Event 3" date="08/04/2022" index="3" />
                    <EventPopUp name="Event 4" date="08/04/2022" index="4" />
                    <EventPopUp name="Event 5" date="08/04/2022" index="5" />
                    <EventPopUp name="Event 6" date="08/04/2022" index="6" />
                </TimelineDots>
            </section>
            <section ref={test2Ref} className="section3 snap-start snap-always">
                <Fade up>
                    <CollaboratorContainer>
                        <Title>Proudly Collaborated With</Title>
                        <Collaborators>
                            <Collaborator name="Meta" imagelink="/assets/images/meta.jpg" />
                            <Collaborator name="UM STEM Centre" imagelink="/assets/images/umstem.jpg" />
                        </Collaborators>
                    </CollaboratorContainer>
                </Fade>
            </section>
            <section ref={test3Ref} className="section4 snap-start snap-always">
                <JoinContainer>
                    <Join>
                        <span><ReactTypingEffect
                            text={["Unravel?"]}
                            eraseDelay={999999999}
                            typingDelay={1000}
                        /></span>
                        <ButtonGroup>
                            <JoinButton>Yes</JoinButton>
                            <JoinButton>No</JoinButton>
                        </ButtonGroup>
                    </Join>
                </JoinContainer>
            </section>
            <section className="footer snap-start snap-always">
                <Footer />
            </section>
        </Container>
    );

}

export default Landing


