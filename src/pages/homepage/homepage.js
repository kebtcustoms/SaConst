import React from "react"
import "./homepage.css"
import Carousel from "../../components/carousel/carousel"
import Hero from "../../components/hero/hero"
import AboutUs from "../../components/aboutus/aboutus"
import ContactUs from "../../components/contactus/contactus"
import ServicesSlider from "../../components/servicesslider/servicesslider"
import { Helmet } from "react-helmet-async"
import Spacer from "../../components/spacer/spacer"



export default function HomePage(){
    return(
        <div className="hp--container">
             <Helmet>
                {/* <title>Homepage</title> */}
                <meta charset="utf-8" name="Homepage" content="Welcome to Special Additions Construction." />
                <link rel="canonical" href="/"/>
                <title>Special Additions Construction</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="description" content="Roofing, siding, and trim company with over 35 years of experience. Special Additions Construction maintains a safe on-site reputation."/>
                <meta name="keywords" content="construction, roofing, Troy, Michigan, trim, special additions construction, troy roofing, troy trim, michigan roofing, michigan construction, affordable roofing, affordable roofers, local roofing contractor, michigan roofing contractor, roofing quote, siding quote, trim quote, michigan siding"/>
                <meta property="og:title" content="Special Additions Construction Contractors"/>
                <meta property="og:site_name" content="Special Additions Construction"/>
                <meta property="og:url" content="https://saconst.com"/>
                <meta property="og:description" content="Roofing, siding, and trim company with over 35 years of experience. Special Additions Construction maintains a safe on-site reputation."/>
                <meta property="og:type" content="business.business"/>
                {/* <meta property="og:image" content="https://saconst.com/3.jpg"/> */}
            </Helmet>
            <Hero />
            <Spacer />
            <AboutUs />
            <Spacer />
            <Carousel />
            <Spacer />
            <ServicesSlider />
            <Spacer />
            <ContactUs />
            <Spacer />
        </div>
    )
}
