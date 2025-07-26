// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import CustomDropdown from '../components/customDropdown';
import './contact.css';
import '../components/customDropdown.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: ''
    });

    const productOptions = [
        { label: 'Select a Product', value: '' },
        { label: 'Tissue paper', value: 'tissue-paper' },
        { label: 'Toilet roll', value: 'toilet-roll' },
        { label: 'Kitchen towels', value: 'kitchen-towels' },
        { label: 'Hrt rolls', value: 'hrt-rolls' },
        { label: 'Airlaid napkins', value: 'airlaid-napkins' },
        { label: 'Fresh wipes', value: 'fresh-wipes' },
        { label: 'C-fold', value: 'c-fold' },
        { label: 'M-Fold', value: 'm-fold' },
        { label: 'L-Fold', value: 'l-fold' },
        { label: 'N-Fold', value: 'n-fold' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://formspree.io/f/xovljlpd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', phone: '', product: '', message: '' });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            alert("Error sending message.");
            console.error(error);
        }
    };

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
        <div className="contact-page-container">
            <section className="contact-page-section">
                <div className="contact-page-form-wrapper">
                    <h2 className="contact-page-title">Contact Us</h2>
                    <form className="contact-page-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                        
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                        />
                        
                        <CustomDropdown
                            options={productOptions}
                            placeholder="Select a Product"
                            value={formData.product}
                            onChange={handleInputChange}
                            name="product"
                        />
                        
                        <textarea
                            name="message"
                            placeholder="Type your message here..."
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                        />
                        
                        <button type="submit">Send</button>
                    </form>
                </div>

                <div className="contact-page-info">
                    <h3>Our Office</h3>
                    <p><strong>Munoth Industries</strong></p>
                    <p>Door. 1108, KAattabomman Salai,</p>
                    <p>Madavaram Red Hills Road</p>
                    <p>Chennai - 600052</p>
                    <p>📧 munothindustries@gmail.com</p>
                    <p>📞 (+91) 8754595600 / 7639754545</p>
                </div>
            </section>
        </div>
    );
}

export default Contact;