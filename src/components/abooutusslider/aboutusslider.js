import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./aboutimages.json";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./aboutusslider.css";

import { Navigation } from "swiper";

export default function AboutUsSlider() {
  const sliderRef = useRef(null);
  const gallerySwiperRef = useRef(null);
  const [view, setView] = useState(false);

  const slidesMain = [];
  for (let i = 0; i < 6; i++) {
    slidesMain.push(
      <SwiperSlide key={i} className="aboutcards">
        <h3>{data.data[i].name}</h3>
        <img
          src={data.data[i].link}
          style={{ listStyle: 'none' }}
          alt={`5 Stars`}
        />
        <p>{data.data[i].text}</p>
        <button onClick={() => { setView(!view); gallerySwiperRef.current.swiper.slideTo(i) }}>Click This Shit</button>
      </SwiperSlide>
    );
  }
  function handleClicks(e) {
    if (e.target.classList.contains("dismiss")) {
      setView(!view);
    }
  };

  return (
    <div className="carousel--container">
      <div className="swip--container">
        <Swiper
          ref={sliderRef}
          loop={true}
          spaceBetween={40}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          className="aboutusslider"
          slideToClickedSlide={true}
          onSlideChange={(swiperCore) => {
            const {
              activeIndex,
              snapIndex,
              previousIndex,
              realIndex,
            } = swiperCore;
            console.log({ activeIndex, snapIndex, previousIndex, realIndex });
            let currentslidecity = sliderRef.current.swiper.realIndex;
            console.log("Selected slide is " + currentslidecity)
          }}
        >
          {slidesMain}
        </Swiper>
      </div>
      <div className="aboutmodal" style={{ display: view ? "block" : "none" }}>
        <div className="overlay dismiss" onClick={handleClicks}>
          <span className="dismiss" onClick={handleClicks}>
            X
          </span>
          <Swiper
            ref={gallerySwiperRef}
            loop={true}
            spaceBetween={120}
            slideToClickedSlide={true}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={true}
            className="aboutusslider2"
            modules={[Navigation]}
          onSlideChange={(swiperCore) => {
            const {
              activeIndex,
              snapIndex,
              previousIndex,
              realIndex,
            } = swiperCore;
            console.log({ activeIndex, snapIndex, previousIndex, realIndex });
            
          }}
          >
            {data.data.map((item,index) => (
                <SwiperSlide key={index} className="aboutcards">
                  <h3>{item.name}</h3>

                  <img
                    src={item.link}
                    style={{ listStyle: 'none' }}
                    alt={`5 Stars`}
                  />
                  <p>{item.text}</p>
                </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </div>
  );
}

