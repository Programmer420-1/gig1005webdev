import React, { useState, useCallback, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import tw, { styled } from "twin.macro";
import "../css/App.css";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { Container } from "@mui/material";
import NavBar from "../commons/navbar";
import LandingParticle from "../landing/landingParticle";
import Fade from "react-reveal/Fade";
import { fontFamily } from "@mui/system";
import ScrollToTop from '../landing/ScrollToTop'

const data = [
  {
    key: 1,
    src: "/assets/images/groupPhoto.jpg",
    departmentName: "Mock Department 1",
  },
  {
    key: 2,
    src: "/assets/images/groupPhoto.jpg",
    departmentName: "Mock Department 2",
  },
  {
    key: 3,
    src: "/assets/images/groupPhoto.jpg",
    departmentName: "Mock Department 3",
  },
  {
    key: 4,
    src: "/assets/images/groupPhoto.jpg",
    departmentName: "Mock Department 4",
  },
  {
    key: 5,
    src: "/assets/images/groupPhoto.jpg",
    departmentName: "Mock Department 5",
  },
  {
    key: 6,
    src: "/assets/images/groupPhoto.jpg",
    departmentName: "Mock Department 6",
  },
];

const ImageCard = ({ imageSrc, departmentName, index }) => {
  return (
    <div
      key={index}
      class={
        "transition-all ease-in-out duration-350 rounded overflow-hidden bg-transparent shadow-lg m-2 mb-4 lg:max-w-2xl md:max-w-2xl sm:max-w-lg hover:bg-slate-200 hover:text-primarybg hover:font-bold"
      }
    >
      <Pic>
        <img class="w-full" src={imageSrc} alt={departmentName + "photo"} />
      </Pic>
      <div class="px-6 py-4">
        <div
          class="font text-xl mb-2"
          style={{ fontFamily: "Amiko", letterSpacing: "2px" }}
        >
          {departmentName}
        </div>
      </div>
    </div>
  );
};

function CommitteeGallery() {
  const [isScrolled, setIsScrolled] = useState(false);
  var toTop = document.querySelector('.toTop');

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    //scroll detection
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  function scrollToTop() {
      console.log("Hi");
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  return (
    <Wrap>
      <LandingParticle
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          zIndex: "1",
        }}
      />
      <NavBar isScrolled={isScrolled} />
      <Container>
        <Gallery className="pt-36">
          {data.map((item, index) => {
            return index % 2 === 0 ? (
              <Fade left>
                <ImageCard
                  imageSrc={item.src}
                  departmentName={item.departmentName}
                  index={item.key}
                />
              </Fade>
            ) : (
              <Fade right>
                <ImageCard
                  imageSrc={item.src}
                  departmentName={item.departmentName}
                  index={item.key}
                />
              </Fade>
            );
          })}
        </Gallery>
      </Container>
    <ScrollToTop isScrolled={isScrolled} onClick={scrollToTop}/>
      ;
    </Wrap>
  );
}

export default CommitteeGallery;

const Wrap = styled.div`
  // ${tw`pt-5 px-5 md:px-10`}
  background-color: #0a2729;
  min-height: 100%;
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Pic = styled.div`
  background-color: transparent;
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  z-index: 9999;
  &:hover {
    filter: opacity(0.8);
  }
`;
