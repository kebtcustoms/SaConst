import React from "react";
import "./aboutus.css";
import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div className="aboutus--wrapper">
            <div className="aboutus--stripe"></div>
            <div className="aboutus--container">
                <div className="aboutus--content">
                    <h1>ABOUT US</h1>
                    <div className="aboutus--break"></div>
                    <p>Special Additions Construction is made up of a small crew supporting Southeast Michigan with Roofing, Siding, Trim and Gutter construction and repair. Our philosophy is to be easy to work with and professional during your entire project. Quality materials are always used to protect buildings from the unforgiving Michigan weather. </p>
                    <Link to='/aboutus' className="button--container">
                        <button>Read More</button>
                    </Link>
                </div>
                <div className="aboutus--img"></div>
            </div>
            <div className="aboutus--mobile">
                <div className="aboutus--content">
                    <h1>ABOUT US</h1>
                    <div className="aboutus--break"></div>
                    <div className="aboutus--img"></div>
                    <p>Special Additions Construction is made up of a small crew supporting Southeast Michigan with Roofing, Siding, Trim and Gutter construction and repair. Our philosophy is to be easy to work with and professional during your entire project. Quality materials are always used to protect buildings from the unforgiving Michigan weather. </p>
                    <Link to='/aboutus' className="button--container">
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}