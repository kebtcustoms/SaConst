import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./carousel.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "./carousel.css";

import { Pagination, EffectCoverflow, Navigation, Thumbs, FreeMode } from "swiper";


const slides = [];
for (let i = 0; i < 5; i++) {
  slides.push(
    <SwiperSlide key={`slide-${i}`} tag="li"> 
      <img
        src={data.data[i].link}
        style={{ listStyle: 'none' }}
        alt={data.data[i].alt}
      />
    </SwiperSlide>
  );
}

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
    <div className="gallery--title">
      <h1>PROJECT GALLERY</h1>
      <div className="gallery--break"></div>
    </div>
      <div className="carousel--container">
        <div className="swip--container">
          <Swiper
            effect={"coverflow"}
            loop={true}
            spaceBetween={120}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[EffectCoverflow, Navigation, Pagination, Thumbs, FreeMode]}
            className="mySwiper"
          >
            {slides}
          </Swiper>
        </div>
        <Link to='/projectgallery' className="gallerybutton--container">
                        <button>VIEW GALLERY</button>
                    </Link>

        <div className="thumbnail--container">
          <Swiper
            onSwiper={setThumbsSwiper}
            centeredSlides={false}
            slidesPerView={"auto"}
            freeMode={false}
            watchSlidesProgress={true}
            loop={false}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            allowTouchMove={false}
          >
            {slides}
          </Swiper>
        </div>

      </div>
    </>
  );
}
