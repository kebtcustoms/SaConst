import React from "react"
import "./aboutus.css"
import Title from "../../components/title/title"
import ServicesRight from "../../components/services/servicesright"
import AboutUsSlider from "../../components/abooutusslider/aboutusslider"
import { Helmet } from "react-helmet-async"
import Spacersmall from "../../components/spacer/spacersmall"
import Spacer from "../../components/spacer/spacer"
import Awards from "../../components/awards/awards"

export default function AboutUs(){
    return (
        <div>
            <Helmet>
                <title>About Us</title>
                <meta charset="utf-8" name="About Us" content="Learn about Special Additions Construction" />
                <link rel="canonical" href="/aboutus"/>
            </Helmet>
            <Title title="ABOUT US"/>
            <Spacersmall />
            <ServicesRight 
            title="SPECIAL ADDITIONS CONSTRUCTION"
            text="Special Additions Construction has a long standing history in the state of Michigan providing residential and commercial building exterior construction. Our specialty is roofing and siding, but have the skill and expertise to get the job done right. Our customer specialist, Pete, understands your individual challenge and can create a plan to support your budget and timeline. Jay and his crew are ready to action your specific plan exactly to specifications. Our goal is to leave your building in better shape with a happy customer. Our long list of satisfied customer feedback below will prove our guarantee of a happy customer!"
            img="https://amg-info-space.nyc3.cdn.digitaloceanspaces.com/saconst%2FIMG_2372.JPG"
            alt="Construction crew."
            />
            <Spacer />
            <Awards />
            <Spacer />
            <AboutUsSlider />
            <Spacer />
        </div>
    )
}