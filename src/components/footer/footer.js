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
                    <a href="https://www.astropupmg.com">Website by Astropup Media Group</a>
                </div>

            </div>
            <div className="footermobile--content">
                <div className="footermobile--logo">
                    <Link to='/'>
                        <img className="footermobile--logo--img" src="/images/SACLogo.png" alt="" />
                    </Link>
                </div>
                <div className="footermobile--nav--list">
                    <div className="linkmobile--container">
                        <NavLink className="optionmobile" activeStyle={({ isActive }) => `${isActive ? "active" : ""}`} to='/privacypolicy'>Privacy</NavLink>
                        <NavLink className="optionmobile" activeStyle={({ isActive }) => `${isActive ? "active" : ""}`} to='/termsconditions'>Terms</NavLink>

                    </div>
                </div>

            <div className="sitebymobile--container">
                <a href="https://www.astropupmg.com">Website by AMG</a>
            </div>
            </div>
        </div>
    )
}