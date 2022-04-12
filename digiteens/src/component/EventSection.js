import React, { PureComponent } from 'react';
import tw, { styled } from 'twin.macro'

function EventSection({title ,backgroundImg, contentComp}) {
  return (
    <Section bgImage={backgroundImg} className='snap-always snap-start overflow-hidden text-center'>
        <div className='md:container md:mx-auto h-full flex flex-col'>
        {title ? <h1 className='text-white  md:pt-10 pt-5 lg:pt-32 uppercase text-2xl text-center font-bold'>{title}</h1> : <></>}
           {contentComp} 
        </div>
    </Section>
  )
}

export default EventSection

const Section = styled.div`
    height: 100vh;
    width: 100%;
    background-image: ${props=> `url("/images/${props.bgImage}")`};
    background-position: center;
    background-repeat: center;
    background-size: cover;
    background-color: #0A2729;
    display:relative;
`