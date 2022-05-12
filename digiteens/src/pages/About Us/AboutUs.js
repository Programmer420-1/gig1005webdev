import React from "react";
import "../../css/AboutUs.css";

// Import Icons
import AboutOval from "./AboutOval";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../css/swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import NavBar from "../../commons/navbar";

class AboutUs extends React.Component {
  state = {
    isScrolled: false,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.setState((state) => ({
          isScrolled: true,
        }));
      } else {
        this.setState((state) => ({
          isScrolled: false,
        }));
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      if (window.scrollY > 0) {
        this.state.isScrolled = true;
      } else {
        this.state.isScrolled = false;
      }
    });
  }

  // componentDidUpdate() {
  //   this.render();
  // }

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
          loop={false}
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
                <br />
              </div>
              <div className="rightText">
                Irdina <br />
                <br />
                <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Digital Privacy</h1>
            <div className="width">
              Nurin Farhanah <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Aizat <br />
                Syakirah <br />
                <br />
              </div>
              <div className="rightText">
                Fareez <br />
                <br />
                <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Digital Opportunity</h1>
            <div className="width">
              Atiqah Miza <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Adriana <br />
                Arina <br />
                <br />
              </div>
              <div className="rightText">
                Norshafiqah <br />
                <br />
                <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Digital Security</h1>
            <div className="width">
              Nur Damia <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Izyan <br />
                Sahira <br />
                <br />
              </div>
              <div className="rightText">
                Thayananth <br />
                <br />
                <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Digital Advocacy</h1>
            <div className="width">
              Linzan Liu <br />
              <div className="HOD">
                HOD <br />
              </div>
              <div className="leftText">
                Hon Ting <br />
                Jia Hui <br />
                <br />
              </div>
              <div className="rightText">
                Yan Jian <br />
                <br />
                <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G1</h1>
            <div className="width">
              Mentor <br />
              <div className="HOD">
                Digital Privacy <br />
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
                Digital Opportunity <br />
              </div>
              <div className="leftText">
                Yun Onn <br />
                Fahmie <br />
                Haikal <br />
              </div>
              <div className="rightText">
                Qian Xuan <br />
                Fazreilie <br />
                <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G3</h1>
            <div className="width">
              Mentor <br />
              <div className="HOD">
                Digital Security <br />
              </div>
              <div className="leftText">
                Hakimi <br />
                Zheng Yu <br />
                Bade Srija <br />
              </div>
              <div className="rightText">
                Ching Yen <br />
                Qiao Fang <br />
                <br />
              </div>
              <div className="line"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G4</h1>
            <div className="width">
              Mentor <br />
              <div className="HOD">
                Digital Advocacy <br />
              </div>
              <div className="leftText">
                Firdaus <br />
                Jasmine <br />
                Janice <br />
              </div>
              <div className="rightText">
                Eusoff <br />
                Jia Wen <br />
                <br />
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
