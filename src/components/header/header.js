import React, {useState} from "react"
import "./header.css"
import { NavLink , Link } from 'react-router-dom';


export default function Header(){
    const [open, setOpen] = useState(false);
    return (
        <div className="header--container">
            <div className="header--content">
                <div className="logo">
                    <Link to='/'>
                    <img className="logo--img" src="/images/SACLogo.png" alt="" />
                    </Link>
                </div>
                <div className="bg"></div>
                <div className={open ? "mobile--list" : "mobile--list2"}>
                    <NavLink className="option" onClick={() => setOpen(!open)} activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/'><p>Home</p></NavLink> 
                    <NavLink className="option" onClick={() => setOpen(!open)} activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/aboutus'>About Us</NavLink>
                    <NavLink className="option" onClick={() => setOpen(!open)} activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/services'>Services</NavLink>
                    <NavLink className="option" onClick={() => setOpen(!open)} activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/projectgallery'>Project Gallery</NavLink>
                    <NavLink className="option" onClick={() => setOpen(!open)} activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/contactus'>Contact Us</NavLink>                    
                </div>
                <div className="nav--list">
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/'>Home</NavLink> 
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/aboutus'>About Us</NavLink>
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/services'>Services</NavLink>
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/projectgallery'>Project Gallery</NavLink>
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/contactus'>Contact Us</NavLink>                    
                </div>

                <div className={open ? 'menuToggle2' : 'menuToggle1'} onClick={() => setOpen(!open)} ></div>
                
            </div>

        </div>
    )
}


