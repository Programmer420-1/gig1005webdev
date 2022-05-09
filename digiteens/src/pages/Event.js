import React, { useState, useEffect } from 'react'
import EventSection from '../component/EventSection'
import ReactTypingEffect from 'react-typing-effect';
import { styled } from 'twin.macro'
import { Tab, Tabs, TabPanel } from '../component/tabs';
import { ModuleDetails } from '../component/moduleDetails';
import NavBar from '../commons/navbar';

function Event() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    //scroll detection
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden relative">
      <>
        <NavBar isScrolled={isScrolled} />
        <div style={{ "minHeight": "100vh" }}>
          <EventSection title="" backgroundImg='event.jpg' contentComp={EventLanding()} />
        </div>

      </>
      <EventSection title="Modules" backgroundImg='' contentComp={Modules()} />
      <EventSection title="Tiktok Challenges" backgroundImg='testing.jpg' contentComp={Tiktok()} />
    </div>


  )
}

export default Event

function EventLanding() {
  return (
    <div className='flex flex-col justify-center font-bold text-7xl text-center' style={{ "height": "100vh" }}>
      <ReactTypingEffect
        text={["EVENT"]}
        eraseDelay={100000}
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
          <Tab key={1} label="Digital Opportunity" value={1}></Tab>
          <Tab key={2} label="Digital Privacy" value={2}></Tab>
          <Tab key={3} label="Digital Security" value={3}></Tab>
          <Tab key={4} label="Digital Advocacy" value={4}></Tab>
        </Tabs>
      </TabsContainer>
      <TabsContainer className='h-4/5 grow'>
        <TabPanel value={activeTab} selectedIndex={1}>
          <ModuleDetails
            details="Participants will know more about malicious software and better understand the meaning of digital privacy and what is their privacy right."
            qrcode="digital oppurtunites.png"
            timetable="digital opportunity schedule.png"
            gForm="https://forms.gle/8noKVwPN4bs9SBrE6"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <ModuleDetails
            details="Participants get to know the purpose of using algorithms and how to create algorithms to solve problems."
            qrcode="digital privacy.png"
            timetable="digital privacy schedule.png"
            gForm="https://forms.gle/993yy2HWGsSx3ye27"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <ModuleDetails
            details="Participans will be introduced the different types of scam and common online frauds and the ways to avoid getting scammed."
            qrcode="digital security.png"
            timetable="digital security schedule.png"
            gForm="https://forms.gle/qM9f2TtFEmiXxNxa7"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={4}>
          <ModuleDetails
            details="Participants will understand the meaning and the importance of digital advocy after this event."
            qrcode="digital advocacy.png"
            timetable="digital advocacy schedule.png"
            gForm="https://forms.gle/3YhPYPP4gqoMdDje6"
          />
        </TabPanel>
      </TabsContainer>
    </>


  )
}

function Tiktok() {
  return (
    <>
      <div className="flex items-center justify-center h-full md:mx-28 mx-5 pb-5">
        <div className="flex shadow-md cursor-pointer hover:-translate-y-1 duration-300">

          {/* <div className="inline relative group h-48">
            <img className="absolute rounded object-cover h-full w-full"
              src="images/tiktok.jpg"
              alt="Product Preview" />
          </div> */}


          <div className="flex flex-col bg-white rounded md:p-3 px-7 lg:px-10">
            <div className="pt-5 text-sm font-semibold text-left text-gray-900 hover:underline truncate">
              Terms & Condition
            </div>

            <div className="text-xxs text-gray-400 mt-1 px-1 text-left">
              <p>1. It is an individual challenge </p>
              <p>2. Maximum duration of video is 60 seconds </p>
              <p>3. Inappropriate content are strictly prohibited </p>
              <p>4. Songs with swear words are strictly prohibited </p>
              <p>5. Content of the tiktok must be based on at least one of the modules of this event</p>
              <p>6. Only one submission per student is allowed</p>
              <p>7. Submission due on 12pm, 15th May 2021 </p>
              <p>8. There are 2 challenge categories: (1) Most liked tiktok (2) Top 4 tiktok videos voted by mentors</p>
              <p>9. The winner for most liked video is not eligible for top 4 videos</p>
              <p>10. All tiktok videos will be posted on 16th May 2021 in Bits With Teens Instagram. The results will be finalized at 12pm 21st </p>
              <p>May 2021. Only likes received from our Instagram page will be counted</p>
              <p>11. Submit the video in MP4 format to the google form using the QR code provided. Name the file as student full name (e.g. Mohammad Ali)</p>

            </div>

            <div className="pt-5 text-sm font-semibold text-gray-900 hover:underline truncate text-left">
              Prizes
            </div>

            <div className="text-xxs text-gray-400 mt-1 text-left">
              <p>1 x Popular Award (RM 50)</p>
              <p>3 x Best TikTok (RM 100 each)</p>
            </div>

            <div className="flex flex-row flex-auto justify-end mt-7 mb-5 mx-auto">
              <a className="flex text-xs border px-3 my-auto py-2 
                        border-[#106466] group hover:bg-[#12FFC9] hover:border-[#12FFC9]
                        rounded-xss
                        transition-all duration-200 rounded">
                <div className="text-xxs text-[#106466] font-semibold group-hover:text-white delay-100 md:px-10 md:py-1">
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