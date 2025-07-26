// src/pages/AboutUs.js
import React, { useEffect } from 'react';
import tissueImage from '../assets/Mockups/all-products.png'; // Save the image in /assets
import './about-us.css';

function AboutUs() {
    // Header spacing fix to prevent red line at top
    useEffect(() => {
        const spacer = document.querySelector('.header-spacer');
        const header = document.querySelector('.main-header');
        if (spacer && header) {
            spacer.style.height = `${header.getBoundingClientRect().height}px`;
        }
        return () => {
            if (spacer) spacer.style.height = '';
        };
    }, []);

    // Scroll to top when component loads
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="about-container">
            <h2 className="section-title">ABOUT US</h2>
            <div className="underline" />

            <div className="about-content">
                <div className="about-text">
                    <img src={tissueImage} alt="Tissue Products" className="about-img" />
                    <p><strong>Founded in 2025</strong>, Munoth Industries has swiftly emerged as a dynamic force in India's tissue paper sector, operating from its modern facility in Chennai, Tamil Nadu. The company's journey is defined by a singular focus: to elevate hygiene standards by delivering reliable, innovative, and accessible tissue solutions for every environment.</p>

                    <h3>Our Story</h3>
                    <p>
                        Munoth Industries was established under the stewardship of Tharoon Munoth, Vinay Munoth, and Karen Munoth, whose shared vision and hands-on leadership have been instrumental in shaping the company's ethos and rapid growth. Their combined experience and forward-thinking approach drive our commitment to operational excellence and customer satisfaction.
                    </p>

                    <h3>What We Do</h3>
                    <p>
                        Specializing in the manufacture and supply of tissue paper napkins, toilet rolls, and kitchen rolls, Munoth Industries caters to a diverse clientele—ranging from homes and restaurants to hospitals, institutions, and hospitality chains. Each product is designed for superior performance, offering a balance of softness, strength, and hygiene that meets the evolving needs of modern consumers.
                    </p>

                    <h3>Our Approach</h3>
                    <p>
                        At Munoth Industries, we believe that true value lies in the details. Our manufacturing process is anchored by advanced technology, stringent quality controls, and a dedicated team of professionals who ensure that every batch meets the highest standards. We source premium raw materials and invest in continuous process improvement, resulting in products that are not only dependable but also environmentally responsible.
                    </p>

                    <h3>Our Team</h3>
                    <p>
                        The strength of Munoth Industries lies in its people. Our skilled workforce operates with a shared sense of purpose, delivering on our promise of timely service and tailored solutions. Whether it's fulfilling large institutional orders or developing bespoke products for niche markets, our team's agility and dedication set us apart.
                    </p>

                    <h3>Our Values</h3>
                    <ul>
                        <li><strong>Integrity in Every Interaction:</strong> Building trust through transparency and ethical business practices.</li>
                        <li><strong>Innovation at Our Core:</strong> Embracing new technologies and ideas to stay ahead of industry trends.</li>
                        <li><strong>Sustainable Progress:</strong> Integrating eco-friendly practices into every facet of our operations.</li>
                        <li><strong>Customer-First Mindset:</strong> Listening, adapting, and delivering beyond expectations.</li>
                    </ul>

                    <h3>Looking Ahead</h3>
                    <p>
                        Munoth Industries is more than a manufacturer—we are a partner in progress for our clients and a responsible contributor to the community. As we continue to expand our footprint, our focus remains on delivering consistent quality, fostering long-term relationships, and setting new benchmarks in the tissue paper industry.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;