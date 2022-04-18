import React, { PureComponent } from 'react';
import tw, { styled } from 'twin.macro'

function EventSection({title ,backgroundImg, contentComp}) {
  return (
    <Section bgImage={backgroundImg} className='md:snap-always md:snap-start md:overflow-hidden text-center'>
        <div className='md:container md:mx-auto h-full flex flex-col'>
        {title ? <h1 className='text-white md:pt-10 py-5 lg:pt-[7.5rem] uppercase text-2xl text-center font-bold'>{title}</h1> : <></>}
           {contentComp} 
        </div>
    </Section>
  )
}

export default EventSection

const Section = styled.div`
    
    width: 100%;
    background-image: ${props=> `url("/images/${props.bgImage}")`};
    background-position: center;
    background-repeat: center;
    background-size: cover;
    background-color: #0A2729;
    display:relative;

    @media(min-width: 640px){
      height: 100vh;
    }
`