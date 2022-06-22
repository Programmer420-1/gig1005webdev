import React, { useState, useCallback, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import tw, { styled } from "twin.macro";
import "../css/App.css";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { Container } from "@mui/material";
import NavBar from "../commons/navbar";
import LandingParticle from "../landing/landingParticle";
import ScrollToTop from "../landing/ScrollToTop";

const data = [
  {
    key: 1,
    src: "/assets/event/1.png",
    width: 1280,
    height: 720,
  },
  {
    key: 2,
    src: "/assets/event/2.png",
    width: 1280,
    height: 720,
  },
  {
    key: 3,
    src: "/assets/event/3.png",
    width: 1280,
    height: 720,
  },
  {
    key: 4,
    src: "/assets/event/4.png",
    width: 1280,
    height: 720,
  },
  {
    key: 5,
    src: "/assets/event/5.png",
    width: 1280,
    height: 720,
  },
  {
    key: 6,
    src: "/assets/event/6.png",
    width: 1280,
    height: 720,
  },
  {
    key: 7,
    src: "/assets/event/7.png",
    width: 1280,
    height: 720,
  },
  {
    key: 8,
    src: "/assets/event/8.png",
    width: 1280,
    height: 720,
  },
  {
    key: 9,
    src: "/assets/event/9.png",
    width: 1280,
    height: 720,
  },
  {
    key: 10,
    src: "/assets/event/10.png",
    width: 1280,
    height: 720,
  },
  {
    key: 11,
    src: "/assets/event/11.png",
    width: 1280,
    height: 720,
  },
  {
    key: 12,
    src: "/assets/event/12.png",
    width: 1280,
    height: 720,
  },
  {
    key: 13,
    src: "/assets/event/13.png",
    width: 1280,
    height: 720,
  },
  {
    key: 14,
    src: "/assets/event/14.png",
    width: 1280,
    height: 720,
  },
  {
    key: 15,
    src: "/assets/event/15.png",
    width: 1280,
    height: 720,
  },
  {
    key: 16,
    src: "/assets/event/16.png",
    width: 1280,
    height: 720,
  },
  {
    key: 17,
    src: "/assets/event/17.png",
    width: 1280,
    height: 720,
  },
  {
    key: 18,
    src: "/assets/event/18.png",
    width: 1280,
    height: 720,
  },
  {
    key: 19,
    src: "/assets/event/19.png",
    width: 1280,
    height: 720,
  },
  {
    key: 20,
    src: "/assets/event/20.png",
    width: 1280,
    height: 720,
  },
  {
    key: 21,
    src: "/assets/event/21.png",
    width: 1280,
    height: 720,
  },
];

function MyGallery() {

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
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, {photo, index}) =>{
  //     setCurrentImage(index);
  //     setViewerIsOpen(true);
  // })

  // const closeLightbox = () =>{
  //     setCurrentImage(0);
  //     setViewerIsOpen(false);
  // }

  // return (
  //     <Wrap>
  //     <p className='text-white md:p-10 p-5 uppercase text-2xl'>Gallery</p>
  //     <div className='px-20'>
  //     <PhotoAlbum layout="rows" photos={photos} onClick={openLightbox}/>
  //     {/* <ModalGateway> */}
  //         {viewerIsOpen?(
  //             // <Modal onClose={closeLightbox}>
  //                 <Carousel
  //           currentIndex={currentImage}
  //           views={photos.map(x => ({
  //             ...x,
  //             srcset: x.srcSet,
  //             caption: x.title
  //           }))}
  //         />
  //             // </Modal>
  //         ) : null}
  //     {/* </ModalGateway> */}

  //     </div>
  //     </Wrap>
  // )
  const [model, setModel] = useState(false);
  const [tempSrc, setTempSrc] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

  // const openLightbox = useCallback((event, { photo, key }) => {
  //     setTempSrc(data[key - 1].src);
  //     setModel(true);
  // })

  const getImg = (src) => {
    setTempSrc(src);
    setModel(true);
  };

  return (
    <Wrap>
      <LandingParticle
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
        }}
      />
      <NavBar isScrolled={isScrolled} />
      <Container>
        <div className={model ? "model open" : "model"}>
          <img src={tempSrc} />
          <CloseIcon className="closeIcon" onClick={() => setModel(false)} />
          <a download="#" className="downloadIcon">
            <DownloadIcon />
          </a>
        </div>
        <p className="text-white md:p-10 p-5 lg:pt-32 text-center uppercase text-2xl font-bold ">
          Gallery
        </p>
        {/* <PhotoAlbum layout="rows" photos={data} onClick={openLightbox} /> */}
        <Gallery>
          {data.map((item, index) => {
            return (
              <Pic key={index} onClick={() => getImg(item.src)}>
                <img
                  src={item.src}
                  style={{ width: `100%`, display: "block" }}
                  alt="photo"
                />
              </Pic>
            );
          })}
        </Gallery>
      </Container>
      <ScrollToTop isScrolled={isScrolled} onClick={scrollToTop}/>
    </Wrap>
  );
}

export default MyGallery;

const Wrap = styled.div`
  // ${tw`pt-5 px-5 md:px-10`}
  background-color: #0a2729;
  min-height: 100%;
`;

const Gallery = styled.div`
  ${tw`grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 px-20`}
`;
const Pic = styled.div`
  transition: all 350ms ease;
  cursor: pointer;
  margin-bottom: 12px;
  z-index: 10;
  &:hover {
    filter: opacity(0.8);
  }
`;
