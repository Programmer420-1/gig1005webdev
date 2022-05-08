import React, { useState } from 'react'
import NavBar from '../commons/navbar'
import tw, { styled } from 'twin.macro'
import LeaderboardDropdown from '../component/LeaderboardDropdown'

const data = {
  "Angular":["image1.jpg", "image1.jpg", "image3.jpg"],
  "React":["image2.jpg", "image2.jpg", "image3.jpg"],
  "Vue":["image3.jpg", "image1.jpg", "image1.jpg"],
}

function Leaderboard() {
  const [selected, setSelected] = useState("Angular");

  return (
    <div style={{backgroundColor:'black'}}>
      <Wrapper>
      <NavBar />
      <p className='font-bold text-3xl text-center md:pt-10 pt-5 lg:pt-32' >Leaderboard</p>
      <LeaderboardDropdown selected={selected} setSelected={setSelected}/>
      <div className='relative h-full mt-10'>
        <div className='grid md:grid-cols-3 grid-cols-1 mx-auto md:fixed inset-x-0 lg:bottom-0 bottom-10 px-3 lg:px-24'>
          
          <PodiumDiv className='md:order-2 md:relative md:bottom-36'>
            <PodiumImg bgImage={data[selected][0]}></PodiumImg>
            <div className='md:py-5 py-3 md:mx-5 mx-28' style={{ backgroundColor: '#FFCB9B', color: "#106466" }}>
              <PodiumText>Gold</PodiumText>
            </div>
          </PodiumDiv>

          <PodiumDiv className='md:order-1 md:relative md:bottom-24'>
            <PodiumImg bgImage={data[selected][1]}></PodiumImg>
            <div className='md:py-5 py-3 md:mx-5 mx-28' style={{ backgroundColor: '#D2E9E3', color: "#106466"}}>
              <PodiumText>Silver</PodiumText>
            </div>
          </PodiumDiv>

          <PodiumDiv className='md:order-3 md:relative md:bottom-24'>
            <PodiumImg bgImage={data[selected][2]}></PodiumImg>
            <div className='md:py-5 py-3 md:mx-5 mx-28 ' style={{ backgroundColor: '#D2E9E3', color: "#106466" }}>
              <PodiumText>Bronze</PodiumText>
            </div>
          </PodiumDiv>

        </div>

      </div>
    </Wrapper>
    </div>
    
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/assets/images/leaderboardBg.jpg");
  background-position: 0px -200px;
  background-attachment: fixed;
  @media (max-width: 640px){
    background-position: -350px -60px;
  }
`

const PodiumText = styled.p`
  ${tw`text-center font-semibold text-lg`}
`

const PodiumImg = styled.div`
  ${tw`md:h-52 md:w-36 h-56 w-48 lg:h-64 lg:w-52`}
  margin: 30px auto;
  background-color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props => `url("/assets/images/${props.bgImage}")`};
`

const PodiumDiv = styled.div`
`

export default Leaderboard