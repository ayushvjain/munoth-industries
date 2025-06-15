// src/components/navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Keep this for styling
import logo from '../assets/logo-2.png';  

function Navbar() {
    return (
        <>
            <div className="top-bar">
                <div className="contact">
                    <span className="icon">
                        <i className="fa fa-envelope"></i>
                    </span>
                    <a href="mailto:munothindustries@gmail.com">munothindustries@gmail.com</a>
                    <span> | </span>
                    <span className="icon">
                        <i className="fa fa-phone"></i>
                    </span>
                    <span>(+91) 8754595600 | 7639754545 | +914445824897</span>
                </div>
                <div className="social-icons">
                    {/* <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a> */}
                </div>
            </div>

            {/* Main nav header with logo and links */}
            <header className="main-header">
                <img
                    src={logo}
                    alt="Logo"
                    className="logo"
                />
                <nav className="nav-bar">
                    <NavLink to="/" exact="true">HOME</NavLink>
                    <NavLink to="/about">ABOUT US</NavLink>
                    <NavLink to="/products">OUR PRODUCTS</NavLink>
                    <NavLink to="/contact">CONTACT US</NavLink>
                </nav>
            </header>
        </>
    );
}

export default Navbar;
