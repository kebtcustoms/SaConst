import React, { useRef, useState } from "react";
import data from "./images.json";
// import Modal from "./modal.js";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import "./gallery.css"

export default function Gallery() {
  // const [clickedImg, setClickedImg] = useState(null);
  const modalSwiperRef = useRef(null);
  const [modal, setModal] = useState(false);


  function handleClicks(e) {
    if (e.target.classList.contains("dismiss")) {
      setModal(!modal);
      // document.querySelector('.scrollable').removeEventListener('wheel', preventScroll);
    }
  };





  // const handleClick = (item, index) => {
  //   setCurrentIndex(index);
  //   setClickedImg(item.link);
  // };

  // const handelRotationRight = () => {
  //   const totalLength = data.data.length;
  //   if (currentIndex + 1 >= totalLength) {
  //     setCurrentIndex(0);
  //     const newUrl = data.data[0].link;
  //     setClickedImg(newUrl);
  //     return;
  //   }
  //   const newIndex = currentIndex + 1;
  //   const newUrl = data.data.filter((item) => {
  //     return data.data.indexOf(item) === newIndex;
  //   });
  //   const newItem = newUrl[0].link;
  //   setClickedImg(newItem);
  //   setCurrentIndex(newIndex);
  // };

  // const handelRotationLeft = () => {
  //   const totalLength = data.data.length;
  //   if (currentIndex === 0) {
  //     setCurrentIndex(totalLength - 1);
  //     const newUrl = data.data[totalLength - 1].link;
  //     setClickedImg(newUrl);
  //     return;
  //   }
  //   const newIndex = currentIndex - 1;
  //   const newUrl = data.data.filter((item) => {
  //     return data.data.indexOf(item) === newIndex;
  //   });
  //   const newItem = newUrl[0].link;
  //   setClickedImg(newItem);
  //   setCurrentIndex(newIndex);
  // };

  return (
    <div>

      <div className="wrapper">
        {data.data.map((item, index) => (
          <div key={index} className="wrapper-images" onClick={() => { setModal(!modal); modalSwiperRef.current.swiper.slideTo(index) }}>
            <img
              src={item.link}
              alt={item.text}
            // onClick={() => handleClick(item, index)}
            />
            {/* <h2>{item.text}</h2> */}
          </div>
        ))}
      </div>

      {/* <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      // </div> */}
      <div className="modal" style={{ display: modal ? "block" : "none" }}>
        <div className="overlay dismiss" onClick={handleClicks}>
          <span className="dismiss" onClick={handleClicks}>
            X
          </span>
          <Swiper
            ref={modalSwiperRef}
            loop={true}
            spaceBetween={300}
            slideToClickedSlide={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={true}
            className="modalslider"
            modules={[Navigation]}
          >
            {data.data.map((item, index) => (
              <SwiperSlide key={index} className="modalslides">
                <img
                  src={item.link}
                  style={{ listStyle: 'none' }}
                  alt={item.text}
                />
              </SwiperSlide>
            ))}

          </Swiper>


        </div>
      </div>
    </div>
  );
}

