import React from "react"
import "./services.css"
import ServicesLeft from "../../components/services/servicesleft"
import ServicesRight from "../../components/services/servicesright"
import ContactUsNoPic from "../../components/contactus/contactusnopic"
import Title from "../../components/title/title"
import { Helmet } from "react-helmet-async"
import Spacer from "../../components/spacer/spacer"
import Spacersmall from "../../components/spacer/spacersmall"

export default function Services(){
    return(
        <div>
            <Helmet>
                <title>Services</title>
                <meta charset="utf-8" name="Services" content="Learn about Special Additions Construction offered services." />
                <link rel="canonical" href="/services"/>
            </Helmet>
            <Title title="SERVICES"/>
            <Spacersmall />
            <ServicesLeft 
            title="ROOFING"
            text="Special Additions Construction has been in the roofing business for over 30 years. Our expertise spans from high pitched roofs in Hamtramck to Ranch style homes in Troy and beyond. Our team uses the latest materials ensuring your project is built to last protecting you and your family for years to come. We ensure our crews are respectful of the job location using the latest safety equipment and disposal methods to leave our job, your home, in the best condition possible."
            img="https://amg-info-space.nyc3.cdn.digitaloceanspaces.com/saconst%2FIMG_1112.JPG"
            alt="Residential roofing project."
            />
            <Spacer />
            <ServicesRight 
            title="SIDING AND TRIM"
            text="Special Additions Construction understands that exterior protection of a home doesn’t end with your roof. Our team has siding expertise to protect the entire outside of your home. Our crew has a wide variety of materials, colors, and styles to choose so the customer can get exactly the look expected. Although siding and trim cover the side of the building, we understand that the foundation and what is underneath needs to be clean and repaired before any job can be considered well done."
            img="https://amg-info-space.nyc3.cdn.digitaloceanspaces.com/saconst%2FIMG_2355.JPG"
            alt="Residential siding and trim project."
            />
            <Spacer />
            <ServicesLeft 
            title="GUTTERS"
            text="Special Additions Construction takes safety and care to the next level with water removal expertise. Our team will be able to support the finishing touches on your home with gutter installation and repair. We have the materials to support multiple styles and materials to customer preference. Keep your biggest investment intact with an excellent gutter system."
            img="https://amg-info-space.nyc3.cdn.digitaloceanspaces.com/saconst%2FIMG_2359.JPG"
            alt="Residential gutters project."

            />
            <Spacersmall />
            <ContactUsNoPic />
            
        </div>
    )
}
