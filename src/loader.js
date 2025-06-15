import React from 'react';
import './loader.css';

function Loader() {
    return (
        <div className="loader-overlay">
            <div className="spinner">
                <img src="https://vandanatissues.com/wp-content/uploads/2020/11/logo-1.png" alt="Logo" className="loader-logo" />
            </div>
        </div>
    );
}

export default Loader;