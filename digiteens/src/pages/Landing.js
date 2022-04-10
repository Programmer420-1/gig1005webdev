import React from 'react'
import styled from "styled-components"
import NavBar from '../commons/navbar'
import Home from '../landing/Home'
import Timeline from '../landing/Timeline'
import { useState, useEffect, useRef } from 'react'
import SectionBar from '../landing/SectionBar'


const Container = styled.div`
    height : 500vh;
    width : 100%;
    overflow-x: hidden;
    position: relative;
    background-color : #0A2729;
`

const Test = styled.div`
`
const Test1 = styled.div`
`
const Test2 = styled.div`
`

const Footer = styled.div`
`

const TimelineContainer = styled.div`
    overflow: hidden;
    position : absolute;
    margin : 14.5rem 0 0 6.5rem;

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

    const homeRef = useRef();
    const testRef = useRef();
    const test1Ref = useRef();
    const test2Ref = useRef();
    const test3Ref = useRef();

    const [whichVisible, setWhichVisible] = useState("home");

    useEffect(() => {
        const homeObserver = new IntersectionObserver((entries) => {
            const placeholder = entries[0].isIntersecting ? setWhichVisible("welcome") : "";
        }, options);
        const testObserver = new IntersectionObserver((entries) => {
            const placeholder = entries[0].isIntersecting ? setWhichVisible("about us") : "";
        }, options);
        const test1Observer = new IntersectionObserver((entries) => {
            const placeholder = entries[0].isIntersecting ? setWhichVisible("timeline") : "";
        }, options);
        const test2Observer = new IntersectionObserver((entries) => {
            const placeholder = entries[0].isIntersecting ? setWhichVisible("sponsors") : "";
        }, options);
        const test3Observer = new IntersectionObserver((entries) => {
            const placeholder = entries[0].isIntersecting ? setWhichVisible("join us") : "";
        }, options);

        homeObserver.observe(homeRef.current);
        testObserver.observe(testRef.current);
        test1Observer.observe(test1Ref.current);
        test2Observer.observe(test2Ref.current);
        test3Observer.observe(test3Ref.current);
    }, []);

    return (
        <Container>
            <NavBar />
            <SectionBar current={whichVisible}/>
            <section ref={homeRef} class="section">
                <Home />
            </section>
            <section ref={testRef} class="section1">
                <Test />
            </section>
            <section ref={test1Ref} class="section2">
                <Test1 />
            </section>
            <section ref={test2Ref} class="section3">
                <Test2 />
            </section>
            <section ref={test3Ref} class="section4">
                <Footer />
            </section>
            <TimelineContainer>
                <Timeline />
            </TimelineContainer>
        </Container>
    );

}

export default Landing


