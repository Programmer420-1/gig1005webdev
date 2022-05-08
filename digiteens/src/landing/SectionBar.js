import React from 'react'
import styled from 'styled-components'
import ItemSpan from './ItemSpan'


const Wrapper = styled.div`
    position: fixed;
    display: ${props=>props.isVisible?"flex":"none"};
    flex-direction : column;
    top: 50%;
    margin-left: 4rem;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 9999;

    @media(max-width: 1007px){
        top:95%;
        width: 100%;
        margin: 0;
        justify-content: center;
        flex-direction: row;
    }
`

const VertLine = styled.div`
    display: flex;
    position: relative;
    flex-direction: column; 
    justify-content: center;
    padding: 1.5rem;    
    border-left: 3.5px solid rgba(255,255,255,0.3);

    @media(max-width: 1007px){
        border-left:none;
    }
`

const Dot = styled.span`
    top: 1.7rem;
    left: -0.55rem;
    position:absolute;
    height: 0.9rem;
    width: 0.9rem;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    transform: translateY(${props=>props.translateFactor * 2.25 + 'rem'});
    transition: transform 0.4s ease-in-out;

    @media(max-width: 1007px){
        display: none;
    }
`
const SectionBar = ({ current }) => {
    const names = ["welcome", "about us", "timeline", "sponsors", "join us", "footer"]
    const factor = names.indexOf(current);

    return (
        <Wrapper isVisible={!(current==="footer")}>
            <VertLine>
                <Dot translateFactor={factor}/>
                <ItemSpan index={0} name="welcome" isActive={current === "welcome"} topMargin={false} />
                <ItemSpan index={1} name="about us" isActive={current === "about us"} />
                <ItemSpan index={2} name="timeline" isActive={current === "timeline"} />
                <ItemSpan index={3} name="sponsors" isActive={current === "sponsors"} />
                <ItemSpan index={4} name="join us" isActive={current === "join us"} />
            </VertLine>
        </Wrapper>
    )
}




export default SectionBar