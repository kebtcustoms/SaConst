import React from "react";
import "./contactus.css";
import { Link } from 'react-router-dom';

export default function ContactUs() {
    return (
        <div className="contactus--wrapper">
            <div className="contactus--stripe"></div>
            <div className="contactus--container">
                <div className="contactus--img"></div>
                <div className="contactus--content">
                    <h1>CONTACT US</h1>
                    <div className="contactus--break"></div>
                    <p>Please reach out to our friendly team by clicking on the contact us button below. One member of our team will reach out shortly to discuss your construction needs and provide a quote. It’s our pleasure to continue to support the great people of Southeast Michigan for years to come.</p>
                    <Link to='/contactus' className="button--container">
                        <button>Contact Us</button>
                    </Link>
                </div>
            </div>
            <div className="contactus--mobile">
                <div className="contactus--content">
                    <h1>CONTACT US</h1>
                    <div className="contactus--break"></div>
                <div className="contactus--img"></div>
                    <p>Please reach out to our friendly team by clicking on the contact us button below. One member of our team will reach out shortly to discuss your construction needs and provide a quote. It’s our pleasure to continue to support the great people of Southeast Michigan for years to come.</p>
                    <Link to='/contactus' className="button--container">
                        <button>Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}