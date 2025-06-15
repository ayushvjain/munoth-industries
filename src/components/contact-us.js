// src/components/Contact.js

import React from 'react';
import './contact-us.css'; // Create this CSS file for styling

function Contact() {
    return (
        <div className="contact-section">
            <div className="contact-container">
                <div className="contact-block">
                    <h3>CONTACT US</h3>
                    <p><strong>Mr. Tharoon Munoth</strong></p>
                    <p> Door. 1108, Kattabomman Salai, Madavaram Red Hills Rd, Chennai - 600052</p>
                    <p>📞 (+91) 8754595600 / 7639754545</p>
                    <p>📧 munothindustries@gmail.com</p>
                </div>
                <div className="map-block">
                    <h3>LOCATION</h3>
                    <div className="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7772.321586980847!2d80.170825!3d13.088994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2416f5a477c14618!2sVandana%20Tissue%20Papers%20Private%20Limited!5e0!3m2!1sen!2sin!4v1634742712768!5m2!1sen!2sin" 
                        width="100%" 
                        height="250" 
                        allowfullscreen="" 
                        loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
