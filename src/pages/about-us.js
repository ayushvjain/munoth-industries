// src/pages/Home.js
import React from 'react';
import banner from '../assets/banner.jpg';
import './about-us.css';

function AboutUs() {
    return (
        <div className="banner">
            <img src={banner} alt="Banner" />
            <div className="banner-text">STANDARD MANUFACTURERS OF TISSUES</div>
        </div>
    );
}

export default AboutUs;
