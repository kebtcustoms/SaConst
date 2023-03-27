import React, { useRef, useState } from "react";
import data from "./images.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import "./gallery.css"

export default function Gallery() {
  const modalSwiperRef = useRef(null);
  const [modal, setModal] = useState(false);


  function handleClicks(e) {
    if (e.target.classList.contains("dismiss")) {
      setModal(!modal);
      const bodystyle = document.body.style;
      bodystyle.overflowY = modal ? 'auto' : 'auto';
    }
  };

  return (
    <div>

      <div className="wrapper">
        {data.data.map((item, index) => (
          <div key={index} className="wrapper-images" onClick={() => {
            const bodystyle = document.body.style; 
            setModal(!modal); 
            modalSwiperRef.current.swiper.slideTo(index);
            bodystyle.overflowY = modal ? 'auto' : 'hidden'
             }}>
            <img
              src={item.link}
              alt={item.text}
            />
          </div>
        ))}
      </div>
      <div className="modal" style={{ display: modal ? "block" : "none" }}>
        <div 
        className="overlay"
        >
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
          <div className="overlays dismiss" onClick={handleClicks}>
              </div>

        </div>
      </div>
    </div>
  );
}

