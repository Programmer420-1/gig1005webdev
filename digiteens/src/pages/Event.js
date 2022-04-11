import React, { useState } from 'react'
import EventSection from '../component/EventSection'
import ReactTypingEffect from 'react-typing-effect';
import tw, { styled } from 'twin.macro'
import { Tab, Tabs, TabPanel } from '../component/tabs';
import { ModuleDetails } from '../component/moduleDetails';
import { Container } from '@mui/material';
import NavBar from '../commons/navbar';

function Event() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden relative">
      <>
        <NavBar />
        <EventSection title="" backgroundImg='' contentComp={EventLanding()} />

      </>
      <EventSection title="Modules" backgroundImg='' contentComp={Modules()} />
      <EventSection title="Tiktok Challenges" backgroundImg='testing.jpg' contentComp={Tiktok()} />
    </div>


  )
}

export default Event

function EventLanding() {
  return (
    <div className='absolute inset-x-0 bottom-40 h-16 font-bold text-7xl text-center'>
      <ReactTypingEffect
        text={["EVENT"]}
        eraseDelay={2000}
        typingDelay={1000}
      />

    </div>

  )
}

function Modules() {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  }
  return (
    <>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Module 1" value={1}></Tab>
          <Tab label="Module 2" value={2}></Tab>
          <Tab label="Module 3" value={3}></Tab>
          <Tab label="Module 4" value={4}></Tab>
        </Tabs>
      </TabsContainer>
      <TabsContainer className='h-4/5 grow'>
        <TabPanel value={activeTab} selectedIndex={1}>
          <ModuleDetails
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh neque, imperdiet vel ullamcorper eget, venenatis vitae enim. Nam libero sapien, volutpat nec volutpat vel, tincidunt at libero. Proin iaculis dignissim tellus, vitae volutpat est tristique nec. Maecenas placerat posuere venenatis. Phasellus congue quis mi sit amet tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rhoncus elit sed pellentesque semper. Nulla aliquam tellus sit amet ipsum luctus, eu dignissim velit bibendum. Integer quis mattis odio."
            qrcode="qrcode.png"
            timetable="timetable.jpeg"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <ModuleDetails
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh neque, imperdiet vel ullamcorper eget, venenatis vitae enim. Nam libero sapien, volutpat nec volutpat vel, tincidunt at libero. Proin iaculis dignissim tellus, vitae volutpat est tristique nec. Maecenas placerat posuere venenatis. Phasellus congue quis mi sit amet tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rhoncus elit sed pellentesque semper. Nulla aliquam tellus sit amet ipsum luctus, eu dignissim velit bibendum. Integer quis mattis odio."
            qrcode="qrcode.png"
            timetable="timetable.jpeg"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <ModuleDetails
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh neque, imperdiet vel ullamcorper eget, venenatis vitae enim. Nam libero sapien, volutpat nec volutpat vel, tincidunt at libero. Proin iaculis dignissim tellus, vitae volutpat est tristique nec. Maecenas placerat posuere venenatis. Phasellus congue quis mi sit amet tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rhoncus elit sed pellentesque semper. Nulla aliquam tellus sit amet ipsum luctus, eu dignissim velit bibendum. Integer quis mattis odio."
            qrcode="qrcode.png"
            timetable="timetable.jpeg"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={4}>
          <ModuleDetails
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh neque, imperdiet vel ullamcorper eget, venenatis vitae enim. Nam libero sapien, volutpat nec volutpat vel, tincidunt at libero. Proin iaculis dignissim tellus, vitae volutpat est tristique nec. Maecenas placerat posuere venenatis. Phasellus congue quis mi sit amet tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed rhoncus elit sed pellentesque semper. Nulla aliquam tellus sit amet ipsum luctus, eu dignissim velit bibendum. Integer quis mattis odio."
            qrcode="qrcode.png"
            timetable="timetable.jpeg"
          />
        </TabPanel>
      </TabsContainer>
    </>


  )
}

function Tiktok() {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:mt-15 mt-5">
        <div className="flex flex-col shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300">

          <div className="inline relative group h-48">
            <img className="absolute rounded-t object-cover h-full w-full"
              src="images/tiktok.jpg"
              alt="Product Preview" />
          </div>


          <div className="flex flex-col bg-white rounded-b p-3 text-center">
            <div className="pt-5 text-sm font-semibold  text-center text-gray-900 hover:underline truncate">
              Rules & Regulation
            </div>

            <div className="text-xxs text-gray-400 mt-1 px-1 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus dignissim diam pellentesque erat non nisl amet. Amet consectetur mauris nunc pharetra massa nullam nulla.
            </div>

            <div className="pt-5 text-sm font-semibold text-gray-900 hover:underline truncate text-center">
              Prizes
            </div>

            <div className="text-xxs text-gray-400 mt-1 mx-auto">
              <p>1 x Popular Award (RM 50)</p>
              <p>3 x Best TikTok (RM 100 each)</p>
            </div>

            <div className="flex flex-row flex-auto justify-end mt-7 mb-5 mx-auto">
              <a className="flex text-xs border px-3 my-auto py-2 
                        border-amber-500 group hover:bg-amber-500 
                        rounded-xss
                        transition-all duration-200 rounded">
                <div className="text-xxs text-amber-700 font-semibold group-hover:text-white delay-100">
                  Join!
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

const TabsContainer = styled.div`
display:flex;
padding: 2px;
`