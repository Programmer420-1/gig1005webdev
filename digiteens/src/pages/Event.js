import React, { useState } from "react";
import EventSection from "../component/EventSection";
import ReactTypingEffect from "react-typing-effect";
import { styled } from "twin.macro";
import { Tab, Tabs, TabPanel } from "../component/tabs";
import { ModuleDetails } from "../component/moduleDetails";
import NavBar from "../commons/navbar";

const Event = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll(val) {
    var div = document.getElementById("contentBox");
    if (div.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <div
      onScroll={handleScroll}
      id="contentBox"
      className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden relative"
    >
      <>
        <NavBar isScrolled={isScrolled} />
        <div style={{ minHeight: "100vh" }}>
          <EventSection
            title=""
            backgroundImg="event.jpg"
            contentComp={EventLanding()}
          />
        </div>
      </>
      <EventSection title="Modules" backgroundImg="" contentComp={Modules()} />
      <EventSection
        title="Tiktok Challenges"
        backgroundImg="testing.jpg"
        contentComp={Tiktok()}
      />
    </div>
  );
};

export default Event;

function EventLanding() {
  return (
    <div
      className="flex flex-col justify-center font-bold text-7xl text-center"
      style={{ height: "100vh" }}
    >
      <ReactTypingEffect
        text={["EVENT"]}
        eraseDelay={100000}
        typingDelay={1000}
      />
    </div>
  );
}

function Modules() {
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  };
  return (
    <>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab key={1} label="Shhh! Protect Your Rights" value={1}></Tab>
          <Tab key={2} label="D’Algorithmer" value={2}></Tab>
          <Tab key={3} label="Scams & Swindles 101" value={3}></Tab>
          <Tab key={4} label="Tweet: Perception Changer" value={4}></Tab>
        </Tabs>
      </TabsContainer>
      <TabsContainer className="h-4/5 grow">
        <TabPanel value={activeTab} selectedIndex={1}>
          <ModuleDetails
            details="Algorithm, what is it? Join us to get the answer! You will have the opportunity to learn how algorithm is applied in our daily life and have a chance to design your own one."
            qrcode="digital privacy.png"
            timetable="digital privacy schedule.png"
            gForm="https://forms.gle/993yy2HWGsSx3ye27"
            mindmap="mindmap_DigitalPrivacy.png"
            infographic="infographic_DigitalPrivacy.png"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <ModuleDetails
            details="Rights? Right! Privacy rights is important and you will know why by joining this event! You will also know more about malicious software so you can proctect yourself better."
            qrcode="digital opportunities.png"
            timetable="digital opportunity schedule.png"
            gForm="https://forms.gle/8noKVwPN4bs9SBrE6"
            mindmap="mindmap_DigitalOpportunity.png"
            infographic="infographic_DigitalOpportunity.png"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <ModuleDetails
            details="Oh no! It's scam again! There's so many types of scam and online fraud nowadays and we know it's dangerous to use the technology without knowing how to protect yourself, so join us to know more!"
            qrcode="digital security.png"
            timetable="digital security schedule.png"
            gForm="https://forms.gle/qM9f2TtFEmiXxNxa7"
            mindmap="mindmap_DigitalSecurity.png"
            infographic="infographic_DigitalSecurity.png"
          />
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={4}>
          <ModuleDetails
            details="First time hearing digital advocacy? Do you know how it can improve our life and why social medial is important for digital advocacy? Join us to know the answers!"
            qrcode="digital advocacy.png"
            timetable="digital advocacy schedule.png"
            gForm="https://forms.gle/3YhPYPP4gqoMdDje6"
            mindmap="mindmap_DigitalAdvocacy.png"
            infographic="infographic_DigitalAdvocacy.png"
          />
        </TabPanel>
      </TabsContainer>
    </>
  );
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
              <p>
                5. Content of the tiktok must be based on at least one of the
                modules of this event
              </p>
              <p>6. Only one submission per student is allowed</p>
              <p>7. Submission due on 12pm, 4th Jun 2022 </p>
              <p>
                8. There are 2 challenge categories: (1) Most liked tiktok (2)
                Top 5 tiktok videos voted by mentors
              </p>
              <p>
                9. The winner for most liked video is not eligible for top 5
                videos
              </p>
              <p>
                10. All tiktok videos will be posted on 6th Jun 2022 in
                Digiteens Instagram. The results will be finalized at 10am 11st
                Jun 2022{" "}
              </p>
              <p>
                {"    "}
                Only likes received from our Instagram page will be counted
              </p>
              <p>
                11. Submit the video in MP4 format to the google form using the
                QR code provided. Name the file as student full name (e.g.
                Mohammad Ali)
              </p>
            </div>

            <div className="pt-5 text-sm font-semibold text-gray-900 hover:underline truncate text-left">
              Prizes
            </div>

            <div className="text-xxs text-gray-400 mt-1 text-left">
              <p>Prize Pool Up to RM500 for all winners</p>
            </div>

            <div className="flex flex-row flex-auto justify-end mt-7 mb-5 mx-auto">
              <a
                className="flex text-xs border px-3 my-auto py-2 
                        border-[#106466] group hover:bg-[#12FFC9] hover:border-[#12FFC9]
                        rounded-xss
                        transition-all duration-200 rounded"
              >
                <div className="text-xxs text-[#106466] font-semibold group-hover:text-white delay-100 md:px-10 md:py-1">
                  <a target="_blank" href="#">Join!</a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;
