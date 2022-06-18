import React from "react"
import "./footer.css"
import { NavLink, Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer--container">
            <div className="footer--content">
            <div className="footer--nav--list">
                <div className="link--container">
                <NavLink className="option" activeStyle={({ isActive }) => `${isActive ? "active" : ""}`} to='/privacypolicy'>Privacy Policy</NavLink>
                <NavLink className="option" activeStyle={({ isActive }) => `${isActive ? "active" : ""}`} to='/termsconditions'>Terms & Conditions</NavLink>

                </div>
            </div>
            <div className="footer--logo">
                <Link to='/'>
                    <img className="footer--logo--img" src="/images/SACLogo.png" alt="" />
                </Link>
            </div>
            <div className="siteby--container">
                <p>Website by Astropup Media Group</p>
            </div>

            </div>
        </div>
    )
}