import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        {/* Quick Links Section */}
        <section id="quick-links" className="quick-links-section">
                <div className="container">
                    <h2>Quick Links</h2>
                    <ul className="quick-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about-us">About Us</a></li>
                        <li><a href="#academics">Academics</a></li>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="#faculty">Faculty</a></li>
                        <li><a href="#students">Students</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
                    <hr/>
                    <p>Copyright &copy; 2024 all rights reserved. Designed by Sourav</p>
                </div>
            </section>
    </div>
  )
}

export default Footer