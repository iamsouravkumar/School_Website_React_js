// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaHome } from 'react-icons/fa';
import './MainNavbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100); 
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} navbar-expand-lg bg-light`}>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <ScrollLink className="nav-link" to="home" smooth={true} duration={500}> <FaHome className="home-icon" /></ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink className="nav-link" to="about-us" smooth={true} duration={500}>About Us</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink className="nav-link" to="academics" smooth={true} duration={500}>Academics</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink className="nav-link" to="admissions" smooth={true} duration={500}>Admissions</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink className="nav-link" to="faculty" smooth={true} duration={500}>Faculty</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink className="nav-link" to="students" smooth={true} duration={500}>Students</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink className="nav-link" to="gallery" smooth={true} duration={500}>Gallery</ScrollLink>
                    </li>
                    <li className="nav-item">
                        <ScrollLink className="nav-link" to="contact-us" smooth={true} duration={500}>Contact Us</ScrollLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
