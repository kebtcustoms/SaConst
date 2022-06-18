import React from "react";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./servicesslider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function ServicesSlider() {
  return (
    <div className="slider--wrapper">
      <div className="slider--content"> 
        <h1>OUR SERVICES</h1>
        <Link to='/services'className="button--container">
            <button>VIEW SERVICES</button>
        </Link>

      </div>

      <Swiper
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"1"}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiperSlider"
      >
        <SwiperSlide>
          <div className="subtitle">
            <h2>ROOFING</h2>
          </div>
          <div className="text">
            <p>
            From minor repairs to complete replacement, Special Additions Construction has the capabilities to complete the job.
            </p>
          </div>
          <img src="../images/sliderimg/img1.jpg"
          style={{ listStyle: 'none' }}
          alt={`Roofing`}
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="subtitle">
            <h2>SIDING</h2>
          </div>
          <div className="text">
            <p>
            From minor repairs to complete replacement, Special Additions Construction has the capabilities to complete the job.
            </p>
          </div>
          <img src="../images/sliderimg/img2.jpg"
          style={{ listStyle: 'none' }}
          alt={`Siding`}
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="subtitle">
            <h2>TRIM</h2>
          </div>
          <div className="text">
            <p>
            From minor repairs to complete replacement, Special Additions Construction has the capabilities to complete the job.
            </p>
          </div>
          <img src="../images/sliderimg/img3.jpg"
          style={{ listStyle: 'none' }}
          alt={`Trim`}
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="subtitle">
            <h2>GUTTERS</h2>
          </div>
          <div className="text">
            <p>
            From minor repairs to complete replacement, Special Additions Construction has the capabilities to complete the job.
            </p>
          </div>
          <img src="../images/sliderimg/img4.jpg"
          style={{ listStyle: 'none' }}
          alt={`Gutters`}
          />
        </SwiperSlide>
      </Swiper> 
      <div className="slider--stripe"></div>
  </div>
  );
}








