import React from 'react';
import { Carousel } from 'react-bootstrap';
import { ReactTyped } from "react-typed";
import './Home.css';

const Home = () => {
    return (
        <div className="introduction-container" >
            {/* Introduction Section */}
            <section id="home" className="introduction-section">
               <img src="https://plus.unsplash.com/premium_photo-1664110691200-0d37f5d0aea5?q=80&w=1345&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/> 
                 <div className="intro-container">
                    <h1 className="intro-title ">Welcome to{" "}
                    <ReactTyped strings={["SpringDale Public School."]} typeSpeed={100} backSpeed={100} loop /></h1>
                    <h3 className="intro-text ">Where we nurture young minds for a brighter future.</h3>
                </div> 
            </section>

            {/* Carousel Section */}
            <section className="" id="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://plus.unsplash.com/premium_photo-1709303662298-4e40139743d7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="annual sports day"
                        />
                        <Carousel.Caption>
                            <h3 style={{color:"black"}}>Annual Sports Day - Celebrating Excellence in Sports</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://plus.unsplash.com/premium_photo-1661454338963-2362f0ee9cfe?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="science exhibition"
                        />
                        <Carousel.Caption>
                            <h3 style={{color:"black"}}>Science Exhibition - Showcasing Student Innovations</h3>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://plus.unsplash.com/premium_photo-1661538040194-07a334ec8ba6?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="cultural fest"
                        />
                        <Carousel.Caption>
                            <h3 style={{color:"black"}}>Cultural Fest - Embracing Diversity and Creativity</h3>
                          
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section id="quick-links" className="quick-links-sec">
                <div className="container">
                    <h2>Quick Links</h2>
                    <ul className="quick-links-li">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about-us">About Us</a></li>
                        <li><a href="#academics">Academics</a></li>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="#faculty">Faculty</a></li>
                        <li><a href="#students">Students</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
