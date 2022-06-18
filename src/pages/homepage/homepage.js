import React from "react"
import "./homepage.css"
import Carousel from "../../components/carousel/carousel"
import Hero from "../../components/hero/hero"
import AboutUs from "../../components/aboutus/aboutus"
import ContactUs from "../../components/contactus/contactus"
import ServicesSlider from "../../components/servicesslider/servicesslider"

export default function HomePage(){
    return(
        <div className="hp--container">
            <Hero />
            <AboutUs />
            <ServicesSlider />
            <Carousel />
            <ContactUs />
        </div>
    )
}
