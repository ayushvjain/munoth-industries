import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './loader';
import './App.css';

import Navbar from './components/navbar';
import ContactUs from './components/contact-us';

const Home = lazy(() => import('./pages/home'));
const AboutUs = lazy(() => import('./pages/about-us'));
const Products = lazy(() => import('./pages/products'));
const Contact = lazy(() => import('./pages/contact'));

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutUs />} />
                            <Route path="/products" element={<Products />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </Suspense>
                </main>
                <ContactUs />
            </div>
        </Router>
    );
}

export default App;
