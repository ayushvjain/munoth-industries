import React, { useState, useEffect } from 'react';
import banner from '../assets/banner.jpg';
import image2 from '../assets/DSC_0008.jpg';
import './home.css';
import products from '../assets/Mockups/all-products.png';
import product4 from '../assets/Mockups/4.png';
import product3 from '../assets/Mockups/3.png';
import product2 from '../assets/Mockups/2.png';
import product1 from '../assets/Mockups/1.png';

function Home() {
    const images = [banner, image2];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

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
        <>
            <div className="slider-container">
                <div
                    className="slider-wrapper"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img key={index} src={img} alt={`Slide ${index}`} className="slider-image" />
                    ))}
                </div>
            </div>

            <div className="about-section">
                <h2>Welcome to Munoth Industries</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            At Munoth Industries, we are committed to redefining everyday hygiene through our premium range of tissue paper napkins, 
                            toilet rolls, and kitchen rolls. Headquartered in Chennai, Tamil Nadu, we blend modern manufacturing with an unwavering 
                            dedication to quality, innovation, and customer satisfaction.
                        </p>

                        <p><strong>Why Choose Munoth Industries?</strong></p>

                        <p><strong>Uncompromising Quality:</strong><br />
                            Crafted from high-grade raw materials, every product undergoes strict quality checks to ensure durability, absorbency, and safety.
                        </p>

                        <p><strong>Customer-Centric Solutions:</strong><br />
                            We believe in understanding our clients' unique needs and delivering personalized, reliable solutions that exceed expectations.
                        </p>

                        <p><strong>Trusted Relationships:</strong><br />
                            Built on a foundation of integrity and service excellence, we nurture long-term partnerships with distributors, retailers, 
                            and institutional buyers.
                        </p>

                        <p><strong>Innovation & Sustainability:</strong><br />
                            Our state-of-the-art facility in Chennai integrates eco-conscious practices and cutting-edge technology to ensure efficiency and environmental responsibility.
                        </p>

                        <p>
                            At Munoth Industries, we don't just produce tissue paper — we build trusted solutions for a cleaner, more comfortable world.
                        </p>

                        <p><em>Experience the Munoth difference — where quality meets care, and every sheet reflects our promise.</em></p>
                    </div>

                    <div className="about-image">
                        <img src={products} alt="Munoth Facility" />
                    </div>
                </div>
            </div>

            <div className="products-section">
                <h2>OUR PRODUCTS</h2>
                <div className="products-underline"></div>
                <p className="products-description">
                    At Munoth Industries, our product line is engineered for businesses that demand consistent quality, operational efficiency,
                    and a seamless supply experience. Each offering is crafted with premium raw materials and advanced manufacturing processes, 
                    ensuring your organization receives products that perform reliably—day after day.
                </p>
                
                <div className="products-grid">
                    <div className="product-item">
                        <div className="product-image-placeholder">
                            <img src={product1} alt="Tissue Box" />
                        </div>
                        <h3>6 in 1 Toilet Paper Roll</h3>
                    </div>
                    
                    <div className="product-item">
                        <div className="product-image-placeholder">
                            <img src={product2} alt="Compact Tissue Paper" />
                        </div>
                        <h3>Tissue Paper Napkin</h3>
                    </div>
                    
                    <div className="product-item">
                        <div className="product-image-placeholder">
                            <img src={product3} alt="Tissue Paper Napkin" />
                        </div>
                        <h3>Tissue Paper Napkin</h3>
                    </div>

                    <div className="product-item">
                        <div className="product-image-placeholder">
                            <img src={product4} alt="Toilet Paper Roll" />
                        </div>
                        <h3>Toilet Paper Roll</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;