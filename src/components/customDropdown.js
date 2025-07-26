// CustomDropdown.js
import React, { useState, useRef, useEffect } from 'react';
import './customDropdown.css';

const CustomDropdown = ({ options, placeholder, value, onChange, name }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
        options.find(opt => opt.value === value) || { label: placeholder, value: '' }
    );
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        if (onChange) {
            onChange({ target: { name, value: option.value } });
        }
    };

    return (
        <div className="custom-dropdown" ref={dropdownRef}>
            <div 
                className={`custom-dropdown-selected ${isOpen ? 'active' : ''}`}
                onClick={handleToggle}
            >
                <span 
                    className="selected-text"
                    style={{ 
                        color: selectedOption.value ? '#333' : '#999' 
                    }}
                >
                    {selectedOption.label}
                </span>
                <span className={`custom-dropdown-arrow ${isOpen ? 'rotated' : ''}`}>
                    ▼
                </span>
            </div>
            
            <div className={`custom-dropdown-options ${isOpen ? 'show' : ''}`}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`custom-dropdown-option ${
                            selectedOption.value === option.value ? 'selected' : ''
                        }`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomDropdown;