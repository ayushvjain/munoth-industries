// src/pages/products.js
import React, { useEffect } from 'react';
import './products.css'
import product4 from '../assets/Mockups/4.png';
import product3 from '../assets/Mockups/3.png';
import product2 from '../assets/Mockups/2.png';
import product1 from '../assets/Mockups/1.png';

function Products() {
    const productList = [
        {
            id: 1,
            image: product1,
            title: 'Toilet Roll (6 in 1)',
            description: `Experience comfort in every roll. Our premium Toilet Rolls are crafted to offer the right balance of strength and softness for everyday luxury.
                Sizes:  
                    - 10 × 11 cm  
                    - 2 ply | 200 pulls`
        },        
        {
            id: 3,
            image: product3,
            title: 'Tissue Paper',
            description: `Elevate special occasions with our napkins crafted for elegant events, festive feasts, and grand dining. These sizes promise striking table presence, enhanced coverage, and superior absorbency. Each napkin combines the plushest feel with robust strength so guests stay comfortable and tables stay immaculate. Perfect for weddings, banquets, or gourmet experiences, their meticulous finish showcases sophisticated hospitality with every fold.
            Sizes:
                - 27 × 27 cm
                - 29 × 29 cm
                - 30 × 30 cm.`
        },
        {
            id: 4,
            image: product4,
            title: 'Toilet Roll',
            description: `Experience comfort in every roll. Our premium Toilet Rolls are crafted to offer the right balance of strength and softness for everyday luxury.
            Sizes:
                - 10 × 11 cm
                - 2 ply | 150, 200, 250, 300, 350 pulls
            Customization: Number of pulls and ply's can be tailored to preference.
            `
        },
        {
            id: 2,
            image: product2,
            title: 'Compact Tissue Papers',
            description: `Designed for convenience and cleanliness, our small compact tissue papers are the perfect hygiene solution for food vendors, chaat shops, and quick-service eateries. Lightweight, soft, and easy to use, these tissues offer a clean and comfortable way for customers to wipe their hands and mouth after enjoying delicious street food.
            Sizes: 
            - 20 × 20 cm
            - 21 × 21 cm
            - 22 × 22 cm`
        },
    ];

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
        <div className="container">
            {/* Brochure Section */}
            <div className="brochure-section">
                <h2>Download Our Product Brochure</h2>
                <p>Click the button below to get a PDF of our latest products.</p>
                <a href="/Paperetti_Brochure.pdf" download className="download-button">
                    Download Brochure
                </a>
            </div>

            {/* Product List Section */}
            <div className="product-list">
                {productList.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.title} />
                        <div>
                            <h3>{product.title}</h3>
                            <p style={{ whiteSpace: 'pre-line' }}>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;