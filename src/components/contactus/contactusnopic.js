import React from "react";
import "./contactusnopic.css";
import { Link } from 'react-router-dom';

export default function ContactUsNoPic() {
    return (
        <div className="contactusnp--wrapper">
            <div className="contactusnp--stripe"></div>
            <div className="contactusnp--container">
                <div className="contactusnp--content">
                    <h1>CONTACT US</h1>
                    <p>We have a top quality product. We are extremely friendly and easy to work with. Our customers have satisfactory results and reviews. Make hiring Special Additions Construction the next right move you make!</p>
                    <Link to='/contactus' className="button--container">
                        <button>Contact Us</button>
                    </Link>
                </div>
            </div>
            <div className="contactusnp--mobile">
                <div className="contactusnp--content">
                    <h1>CONTACT US</h1>
                    <p>We have a top quality product. We are extremely friendly and easy to work with. Our customers have satisfactory results and reviews. Make hiring Special Additions Construction the next right move you make!</p>
                    <Link to='/contactus' className="button--container">
                        <button>Contact Us</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}