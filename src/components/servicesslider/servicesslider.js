import React from "react";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./servicesslider.css";

import { Pagination, Navigation } from "swiper";

export default function ServicesSlider() {
  return (
    <div className="slider--wrapper">
      <div className="slider--content">
        <h1>OUR SERVICES</h1>
        <Link to='/services' className="button--container">
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
        <div className="swip-container">

          <div className="subtitle">
            <h2>ROOFING</h2>
          </div>
          <div className="text">
            <p>
              From minor repairs to complete replacement, Special Additions Construction has the capabilities to complete the job.
            </p>
          </div>
          </div>
          <div className="skeweds--filter">
          </div>
          <img src="https://amg-info-space.nyc3.cdn.digitaloceanspaces.com/saconst%2FResized_20220517_160537.JPEG"
            style={{ listStyle: 'none' }}
            alt={`Roofing`}
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="swip-container">

          <div className="subtitle">
            <h2>SIDING</h2>
          </div>
          <div className="text">
            <p>
              Protecting homes from outside hazards is a must. Special Additions Construction has the experience needed to support any siding request.
            </p>
          </div>
          </div>
          <div className="skeweds--filter">
          </div>
          <img src="https://amg-info-space.nyc3.cdn.digitaloceanspaces.com/saconst%2FResized_20211124_114610.JPEG"
            style={{ listStyle: 'none' }}
            alt={`Siding`}
          />
        </SwiperSlide>
        <SwiperSlide>
        <div className="swip-container">

          <div className="subtitle">
            <h2>TRIM</h2>
          </div>
          <div className="text">
            <p>
              Accenting a home with trim decorates and adds a further layer of protection. Special Additions Construction listens to our customers to bring the vision to life.
            </p>
          </div>
          </div>
          <div className="skeweds--filter">
          </div>
          <img src="https://amg-info-space.nyc3.cdn.digitaloceanspaces.com/saconst%2FIMG_2445.JPG"
            style={{ listStyle: 'none' }}
            alt={`Trim`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swip-container">
            
          <div className="subtitle">
            <h2>GUTTERS</h2>
          </div>
          <div className="text">
            <p>
              Special Additions Constructions can install gutter systems complementing any roofing system. Special Additions Construction is highly experienced in ensuring homes are protected from water damage.
            </p>
          </div>
          </div>
          <div className="skeweds--filter">
          </div>
          <img src="https://amg-info-space.nyc3.cdn.digitaloceanspaces.com/saconst%2FIMG_2370.JPG"
            style={{ listStyle: 'none' }}
            alt={`Gutters`}
          />
        </SwiperSlide>
      </Swiper>
      <div className="slider--stripe"></div>
    </div>
  );
}








