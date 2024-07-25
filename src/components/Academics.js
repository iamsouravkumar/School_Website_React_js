// src/pages/Academics.js
import React from 'react';
import './Academics.css';
import 'animate.css';

const Academics = () => {
  return (
    <div className="academics">
      <section className="academics-intro ">
        <div className="container">
          <h1 className="title">Academics </h1>
          {/* <p className="subtitle">Explore our curriculum, teaching methodologies, and educational resources</p> */}
        </div>
      </section>

      <section className="academics-content">
        <div className="container">
          <div className="curriculum ">
            <h2>Curriculum</h2>
            <h3>Primary (Grades 1-5)</h3>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
            <h3>Secondary (Grades 6-10)</h3>
            <ul>
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
            <h3>Senior Secondary (Grades 11-12)</h3>
            <h4>Science Stream</h4>
            <ul>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Mathematics</li>
              <li>Computer Science</li>
              <li>English</li>
            </ul>
            <h4>Commerce Stream</h4>
            <ul>
              <li>Accountancy</li>
              <li>Business Studies</li>
              <li>Economics</li>
              <li>Mathematics</li>
              <li>English</li>
            </ul>
          </div>
          <div className="methodologies animate__animated animate__fadeInRight">
            <h2>Teaching Methodologies</h2>
            <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
          </div>
          <div className="resources animate__animated animate__fadeInUp">
            <h2>Educational Resources</h2>
            <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
