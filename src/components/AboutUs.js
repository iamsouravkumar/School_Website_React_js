// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';
import 'animate.css';

const AboutUs = () => {
  return (
    <div className="about-us my-2">
      <section className="about-us-intro ">
        <div className="container">
          <h1 className="title">About Us</h1>
          {/* <p className="subtitle">Discover our mission, vision, and history</p> */}
        </div>
      </section>

      <section className="about-us-content">
        <div className="container">
          <div className="history ">
            <h2>Our History</h2>
            <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
          </div>
          <div className="mission Left">
            <h2>Our Mission</h2>
            <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
          </div>
          <div className="vision Right">
            <h2>Our Vision</h2>
            <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
          </div>
          <div className="principals-message Up">
            <h2>Principal's Message</h2>
            <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
          </div>
          <div className="infrastructure Up">
            <h2>Infrastructure and Facilities</h2>
            <ul>
              <li>State-of-the-art science and computer labs</li>
              <li>Spacious and well-equipped classrooms</li>
              <li>Library with a vast collection of books and digital resources</li>
              <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
