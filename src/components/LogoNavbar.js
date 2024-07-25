import React from 'react';
import { Link } from 'react-router-dom';
import './LogoNavbar.css';  // Custom CSS for additional styling

const LogoNavbar = () => {
    return (
        <nav className="logo-navbar navbar justify-content-center my-2">
            <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC5Bd8Xkv1_tZY-wSRPXUrIXiiSJDuW3Y2g&usqp=CAU" alt="Logo" width="auto" height="50" className="d-inline-block align-top mr-2" />
                <span className="navbar-brand-name">SpringDale Public School</span>
            </Link>
        </nav>
    );
};

export default LogoNavbar;
