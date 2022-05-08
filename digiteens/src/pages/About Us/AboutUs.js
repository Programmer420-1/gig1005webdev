import React from "react";
import "./AboutUs.css";

// Import Icons
import AboutOval from "./AboutOval";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import NavBar from "../../commons/navbar";

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isScrolled: false };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.state.isScrolled = true;
        console.log("yay");
      }
      else {
        this.state.isScrolled = false;
        console.log("nay");
      }
    });
  }

  componentDidUpdate() {
    this.render();
  }

  render() {
    return (
      <div className="About-Us-Setting">
        <NavBar isScrolled={this.state.isScrolled} />
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
        <UpDisplay />
        <MiddleParticle />
        <BottomHoriMenu />
      </div>
    );
  }
}

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
      </div>
    );
  }
}

class MiddleParticle extends React.Component {
  render() {
    return (
      <div className="Ellipse">
        <AboutOval style={{ width: "100vw" }} />
        <div className="supervisor" />
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
          <button className="top hidden md:block" onClick={scrollToTop}>
            <scrollToTop />
          </button>
          <text className="bot hidden md:block">back to top</text>
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
          slidesPerGroup={2}
          breakpoints={{
            1519: {
              spaceBetween: 135,
            },
            1470: {
              spaceBetween: 135,
            },
            1350: {
              spaceBetween: 125,
            },
            1230: {
              spaceBetween: 115,
            },
            1100: {
              spaceBetween: 105,
            },
            1000: {
              spaceBetween: 95,
            },
            870: {
              spaceBetween: 85,
            },
            750: {
              spaceBetween: 75,
            },
            700: {
              spaceBetween: 65,
            },
            550: {
              spaceBetween: 60,
            },
            400: {
              spaceBetween: 50,
            },
            350: {
              spaceBetween: 35,
            },
            250: {
              spaceBetween: 24,
            },
            1: {
              spaceBetween: 30,
            },
          }}
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
                Wan Jun <br />
                Shiao Yin <br />
                Yun Onn <br />
              </div>
              <div className="rightText">
                Wei Xin <br />
                Swee Nien <br />
                Meran <br />
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
                Hon Ting <br />
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
            <div className="width">
              Mentor <br />
              <div className="HOD">
                Group 1 <br />
              </div>
              <div className="leftText">
                YuHao <br />
                Jerry <br />
                Megat <br />
              </div>
              <div className="rightText">
                Wei Hong <br />
                Shahirah <br />
                Jannah <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G2</h1>
            <div className="width">
              Mentor <br />
              <div className="HOD">
                Group 2 <br />
              </div>
              <div className="leftText">
                Yun Onn <br />
                Fahmie <br />
                Haikal <br />
              </div>
              <div className="rightText">
                Qian Xuan <br />
                Fazreilie <br />
                xx <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G3</h1>
            <div className="width">
              Mentor <br />
              <div className="HOD">
                Group 3 <br />
              </div>
              <div className="leftText">
                Hakimi <br />
                Zheng Yu <br />
                Bade Srija <br />
              </div>
              <div className="rightText">
                Ching Yen <br />
                Qiao Fang <br />
                xx <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G4</h1>
            <div className="width">
              Mentor <br />
              <div className="HOD">
                Group 4 <br />
              </div>
              <div className="leftText">
                Firdaus <br />
                Jasmine <br />
                Janice <br />
              </div>
              <div className="rightText">
                Eusoff <br />
                Jia Wen <br />
                xx <br />
              </div>
              <div className="line"></div>
            </div>
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
  });
};

export { AboutUs };
