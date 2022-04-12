import React from "react";
import "./AboutUs.css";

// Import Icons
import AboutOval from "./AboutOval";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Container } from "@mui/material";
import NavBar from "../../commons/navbar";
import { color, maxWidth } from "@mui/system";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="About-Us-Setting">
        <NavBar />
        <Stary />
        <AboutUsBody />
      </div>
    );
  }
}

class Stary extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="upStar"></div>
        <div className="midStar"></div>
        <div className="botLeftStar"></div>
        <div className="botStar"></div>
      </div>
    );
  }
}

class AboutUsBody extends React.Component {
  render() {
    return (
      <div>
        <LeftMenu />
        <UpDisplay />
        <MiddleParticle />
        <BottomHoriMenu />
      </div>
    );
  }
}

// let navigator = document.querySelector(.)
class LeftMenu extends React.Component {
  render() {
    return (
      <div>
        <div className="v1"></div>
        <div className="Left-Menu">meet out team</div>
        <div className="Left-Menu" style={{ top: "26vw" }}>
          supervisor & <br /> executive board
        </div>
        <div className="Left-Menu" style={{ top: "31.5vw" }}>
          department
        </div>
      </div>
    );
  }
}

class UpDisplay extends React.Component {
  render() {
    return (
      <div>
        <div className="meet">MEET</div>
        <div className="mirrorTeam">
          OUR <br />
          TEAM
        </div>
        <div className="team">
          OUR <br />
          TEAM
        </div>
        {/* <button className="">
          <ArrowCircleDownIcon
            style={{
              backgroundColor: "white",
              color: "#0a2729",
              borderRadius: "90%",
              cursor: "pointer",
              position: "absolute",
              width: "1.8vw",
              height: "1.8vw",
              left: "49vw",
              top: "46.9vw",
            }}
          />
        </button> */}
      </div>
    );
  }
}

class MiddleParticle extends React.Component {
  render() {
    return (
      <div className="Ellipse">
        <AboutOval style={{ width: "100vw" }} />
      </div>
    );
  }
}

class BottomHoriMenu extends React.Component {
  render() {
    return (
      <>
        <div>
          <HoriMenu />
          <button className="top" onClick={scrollToTop}>
            <scrollToTop />
          </button>
          <text className="bot">back to top</text>
        </div>
      </>
    );
  }
}

class HoriMenu extends React.Component {
  render() {
    return (
      <div className="slider">
        <Swiper
          slidesPerView={2}
          spaceBetween={132}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1 className="slide-Title">Publicity</h1>
            <div className="width">
              Zubayer <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Meran <br />
                Shiao Yin <br />
                Nien <br />
              </div>
              <div className="rightText">
                Wei Xin <br />
                Yun Onn <br />
                Wan Jun <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Multimedia</h1>
            <div className="width">
              Richie <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Zi Wei <br />
                Asraf <br />
                xx <br />
              </div>
              <div className="rightText">
                Irdina <br />
                xx <br />
                xx <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Module.D 1</h1>
            <div className="width">
              Nurin Farhanah <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Aizat <br />
                Syakirah <br />
                xx <br />
              </div>
              <div className="rightText">
                Fareez <br />
                xx <br />
                xx <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Module.D 2</h1>
            <div className="width">
              Atiqah Miza <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Adriana <br />
                Arina <br />
                xx <br />
              </div>
              <div className="rightText">
                Norshafiqah <br />
                xx <br />
                xx <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Module.D 3</h1>
            <div className="width">
              Nur Damia <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Izyan <br />
                Sahira <br />
                xx <br />
              </div>
              <div className="rightText">
                Thayananth <br />
                xx <br />
                xx <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Module.D 4</h1>
            <div className="width">
              Linzan Liu <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Lim HT <br />
                Jia Hui <br />
                xx <br />
              </div>
              <div className="rightText">
                Yan Jian <br />
                xx <br />
                xx <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G1</h1>
            Member 1
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G2</h1>
            Member 7
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G3</h1>
            Member 13
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G4</h1>
            Member 19
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    /* you can also use 'auto' behaviour
         in place of 'smooth' */
  });
};

export { AboutUs };
