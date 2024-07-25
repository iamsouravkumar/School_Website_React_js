// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import LogoNavbar from './components/LogoNavbar';
import WhatsappBtn from './components/WhatsappBtn'

function App() {
  return (

    <Router>
      <div>
      <Navbar />
      <LogoNavbar/>
      <MainPage/>
      <Footer/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/academics" component={Academics} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/students" component={Students} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact-us" component={ContactUs} />
        </Routes>
        <WhatsappBtn/>
      </div>
    </Router>
  );
}

export default App;
