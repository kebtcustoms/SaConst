import React, {useState} from "react"
import "./header.css"
import { NavLink , Link } from 'react-router-dom';


// function toggleMenu(){
    //     const menuToggle = document.querySelector ('.menuToggle');
    //     const navigation = document.querySelector ('.nav--list');
    //     menuToggle.classList.toggle('active');
//     navigation.classList.toggle('active');
//   }

// function closeMenu(){
//     const menu = document.querySelector ('.menuToggle active');
//     // const navi = document.querySelector ('.nav--list');
//     menu.classList.toggle('inactive');
//     // navi.classList.toggle('inactive');
// }

// export default function Header(){
    //     return (
        //         <div className="header--container">
//             <div className="header--content">
//                 <div className="logo">
//                     <Link to='/'>
//                     <img className="logo--img" src="/images/SACLogo.png" alt="" />
//                     </Link>
//                 </div>
//                 <div className="nav--list">
//                     <NavLink className="option"  activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/'>Home</NavLink> 
//                     <NavLink className="option"  activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/aboutus'>About Us</NavLink>
//                     <NavLink className="option"  activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/services'>Services</NavLink>
//                     <NavLink className="option"  activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/productgallery'>Product Gallery</NavLink>
//                     <NavLink className="option"  activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/contactus'>Contact Us</NavLink>                    
//                 </div>

//                 <div className="menuToggle" onClick={toggleMenu}></div>
//             </div>

//         </div>
//     )
// }

export default function Header(){
    const [open, setOpen] = useState(false);
    return (
        <div className="header--container">
            {/* <div className="bg"></div> */}
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
                    <NavLink className="option" onClick={() => setOpen(!open)} activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/productgallery'>Product Gallery</NavLink>
                    <NavLink className="option" onClick={() => setOpen(!open)} activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/contactus'>Contact Us</NavLink>                    
                </div>
                <div className="nav--list">
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/'>Home</NavLink> 
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/aboutus'>About Us</NavLink>
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/services'>Services</NavLink>
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/productgallery'>Product Gallery</NavLink>
                    <NavLink className="option" activeStyle={({isActive}) =>`${isActive ? "active" : ""}`} to='/contactus'>Contact Us</NavLink>                    
                </div>

                <div className={open ? 'menuToggle2' : 'menuToggle1'} onClick={() => setOpen(!open)} ></div>
                
            </div>

        </div>
    )
}


