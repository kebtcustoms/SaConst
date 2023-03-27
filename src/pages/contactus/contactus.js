import React from "react";
import "./contactus.css";
import Form from "../../components/form/form";
import Title from "../../components/title/title";
import { Helmet } from "react-helmet-async"
import Spacersmall from "../../components/spacer/spacersmall";
import Spacer from "../../components/spacer/spacer";


export default function ContactUs(){
    return(
        <div>
            <Helmet>
                <title>Contact Us</title>
                <meta charset="utf-8" name="Contact Us" content="Contact Special Additions Construction for your project." />
                <link rel="canonical" href="/contactus"/>
            </Helmet>
            <Title title="CONTACT US"/>
            <Spacersmall />
            <Form />
            <Spacer />
        </div>
    )
}
