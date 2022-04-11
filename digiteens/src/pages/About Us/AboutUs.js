import React from "react";
import "./AboutUs.css";
import AboutOval from "./AboutOval";
import { BsArrowDownCircle } from "react-icons/bs";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper";

// image in here, the stars use CSS, background: url("imagePath");
class AboutUs extends React.Component {
  render() {
    return (
      <div className="About-Us-Setting">
        <Stary />
        <UpNavigator />
        <AboutUsBody />
      </div>
    );
  }
}

class Tester extends React.Component {
  render() {
    return (
      <body>
        <div className="text-3xl font-bold underline">
          AboutUs Hello Hello Hello
        </div>

        <div className="text-3xl font-bold underline">AboutUs Hello</div>
      </body>
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

class UpNavigator extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "-webkit-inline-flex",
          justifyContent: "space-between",
          textAlign: "left",
        }}
      >
        <div className="Navigator">HOME</div>
        <div className="Navigator">EVENT</div>
        <div className="Navigator">LEADERBOARD</div>
        <div className="Navigator">GALLERY</div>
        <div className="Navigator">FAQ</div>
        <div className="Navigator">ABOUT US</div>
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
        <BackToTop />
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

class BackToTop extends React.Component {
  render() {
    return <button></button>;
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
        <button className="button" style={{ top: "46.4vw" }}>
          <BsArrowDownCircle style={{ width: "1.8vw", height: "1.8vw" }} />
        </button>
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
          <button className="top"></button>
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
            Swee Nien
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Multimedia</h1>
            Slide 2
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Module.D 1</h1>
            Slide 3
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Module.D 2</h1>
            Slide 4
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Module.D 3</h1>
            Slide 5
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Module.D 4</h1>
            Slide 6
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G1</h1>
            Slide 7
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G2</h1>
            Slide 8
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G3</h1>
            Slide 9
          </SwiperSlide>
          <SwiperSlide>
            <h1 className="slide-Title">Mentor G4</h1>
            Slide 10
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

// class HoriMenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.breakPoints = [
//       { width: 1, itemsToShow: 1 },
//       { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
//       { width: 850, itemsToShow: 3 },
//       { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
//       { width: 1450, itemsToShow: 5 },
//       { width: 1750, itemsToShow: 6 },
//     ];
//   }

//   render() {
//     return (
//       <div>
//         <Carousel breakPoints={this.breakPoints}>
//           <Card number="1"></Card>
//         </Carousel>
//       </div>
//     );
//   }
// }

export { AboutUs };
