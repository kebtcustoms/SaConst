import React from "react";
import "./hero.css";
import { Link } from 'react-router-dom';

export default function Hero(){
    return (
        <div className="hero--wrapper">
            <div className="hero--container">
                    <div className="skewed--filter"></div>
                    <div className="hero--content">
                        <h1>Quality, Affordable, Construction Services</h1>
                        <p>Experienced and Professional Construction Services<br />Building your idea into reality</p>
                        <Link to='/contactus'className="button--container">
                        <button>CONTACT US</button>
                        </Link>
                    </div>
            </div>
        </div>
    );
}