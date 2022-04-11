import React, { useState, useCallback } from 'react'
import PhotoAlbum from "react-photo-album";
import tw, { styled } from 'twin.macro'
import '../App.css';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Container } from '@mui/material';
import NavBar from '../commons/navbar';

const data = [
    {
        key: 1,
        src: "/images/image2.jpg",
        width: 1350,
        height: 900
    },
    {
        key: 2,
        src: "/images/image1.jpg",
        width: 900,
        height: 1350
    },
    {
        key: 3,
        src: "/images/image3.jpg",
        width: 3021,
        height: 4028
    },
    {
        key: 4,
        src: "/images/image4.jpg",
        width: 3568,
        height: 4758
    },
    {
        key: 5,
        src: "/images/image5.jpg",
        width: 3955,
        height: 5932
    },
    {
        key: 6,
        src: "/images/image6.jpg",
        width: 4624,
        height: 3468
    }
];


function MyGallery() {
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
    const [tempSrc, setTempSrc] = useState('');

    const openLightbox = useCallback((event, { photo, key }) => {
        setTempSrc(data[key - 1].src);
        setModel(true);
    })

    const getImg = (src) => {
        setTempSrc(src);
        setModel(true);
    }

    return (
        <>
            <Wrap>
                <Container>
                    <NavBar />
                    <div className={model ? 'model open' : 'model'}>
                        <img src={tempSrc} />
                        <CloseIcon className="closeIcon" onClick={() => setModel(false)} />
                        <a download="#" className='downloadIcon' ><DownloadIcon /></a>
                    </div>
                    <p className='text-white md:p-10 p-5 lg:pt-32 text-center uppercase text-2xl font-bold '>Gallery</p>
                    {/* <PhotoAlbum layout="rows" photos={data} onClick={openLightbox} /> */}
                    <Gallery>
                        {data.map((item, index) => {
                            return (
                                <Pic key={index} onClick={() => getImg(item.src)}>
                                    <img src={item.src} style={{ width: `100%`, display: 'block' }} />

                                </Pic>
                            )
                        })}
                    </Gallery>
                </Container>

            </Wrap>

        </>
    );
}

export default MyGallery

const Wrap = styled.div`
    // ${tw`pt-5 px-5 md:px-10`}
    background-color: #0A2729;
    min-height: 100%;
`

const Gallery = styled.div`
    ${tw`grid gap-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 px-20`}
`
const Pic = styled.div`
    // position: relative;
    transition: all 350ms ease;
    cursor: pointer;
    margin-bottom: 12px;

    &:hover{
        filter: opacity(0.8);
    }

`
