import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

import "./carousel.css";

// import required modules
import { Pagination, EffectCoverflow, Navigation, Thumbs, FreeMode } from "swiper";

const slides = [];
  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={ `../images/sliderimg/img${i+1}.jpg` }
          style={{ listStyle: 'none' }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

export default function Carousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="carousel--container">
    <div className="swip--container">
      <Swiper
        effect={"coverflow"}
        loop={true}
        // pagination={true}
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
        allowTouchMove= {false}
      >
        {slides}
      </Swiper>  
      </div>

    </div>
  );
}
