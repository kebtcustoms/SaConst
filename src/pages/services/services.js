import React from "react"
import "./services.css"
import ServicesLeft from "../../components/services/servicesleft"
import ServicesRight from "../../components/services/servicesright"
import ContactUsNoPic from "../../components/contactus/contactusnopic"
import Title from "../../components/title/title"

export default function Services(){
    return(
        <div>
            <Title title="SERVICES"/>
            <ServicesLeft 
            title="ROOFING"
            text="Special Additions Construction has been in the roofing business for over 30 years. Our expertise spans from high pitched roofs in Hamtramck to Ranch style homes in Troy and beyond. Our team uses the latest materials ensuring your project is built to last protecting you and your family for years to come. We ensure our crews are respectful of the job location using the latest safety equipment and disposal methods to leave our job, your home, in the best condition possible."
            />
            <ServicesRight 
            title="SIDING AND TRIM"
            text="Special Additions Construction understands that exterior protection of a home doesn’t end with your roof. Our team has siding expertise to protect the entire outside of your home. Our crew has a wide variety of materials, colors, and styles to choose so the customer can get exactly the look expected. Although siding and trim cover the side of the building, we understand that the foundation and what is underneath needs to be clean and repaired before any job can be considered well done."
            />
            <ServicesLeft 
            title="GUTTERS"
            text="Special Additions Construction takes safety and care to the next level with water removal expertise. Our team will be able to support the finishing touches on your home with gutter installation and repair. We have the materials to support multiple styles and materials to customer preference. Keep your biggest investment intact with an excellent gutter system."
            />
            <ContactUsNoPic />
        </div>
    )
}
