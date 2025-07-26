import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/logo-3.png';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
                <img src={logo} alt="Logo" className="logo" />
                <nav className="nav-bar">
                    <NavLink to="/" exact="true">HOME</NavLink>
                    <NavLink to="/about">ABOUT US</NavLink>
                    <NavLink to="/products">OUR PRODUCTS</NavLink>
                    <NavLink to="/contact">CONTACT US</NavLink>
                </nav>
            </header>

            <div className="header-spacer"></div>
        </>
    );
}

export default Navbar;
