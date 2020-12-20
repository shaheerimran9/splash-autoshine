import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="main-footer__title">
                <Link to="/"><h2>&copy; Splash Auto-Shine</h2></Link>
            </div>
            <ul className="main-footer__links">
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </footer>
    )
};

export default Footer;