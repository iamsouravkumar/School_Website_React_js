// src/pages/MainPage.js
import React from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Academics from './Academics';
import Admissions from './Admissions';
import Faculty from './Faculty';
import Students from './Students';
import Gallery from './Gallery';
import ContactUs from './ContactUs';

const MainPage = () => {
    return (
        <div>
            <section id="home" >
                <Home />
            </section>
            <section id="about-us" >
                <AboutUs />
            </section>
            <section id="academics" >
                <Academics />
            </section>
            <section id="admissions" >
                <Admissions/>
            </section>
            <section id="faculty" >
                <Faculty/>
            </section>
            <section id="students" >
               <Students/>
            </section>
            <section id="gallery" >
                <Gallery/>
            </section>
            <section id="contact-us" >
                <ContactUs/>
            </section>
        </div>
    );
};

export default MainPage;
