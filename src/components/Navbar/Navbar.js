import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';

import './Navbar.css';

const Navbar = () => {
    const [mobileView, setMobileView] = useState(false);

    const toggleSideBar = () => {
        setMobileView(!mobileView);
    };


    return (
        <header>
            <nav className="main-nav">
                <div className="main-nav__title">
                    <Link to="/"><h2>Splash Auto-Shine</h2></Link>
                </div>
                <ul className="main-nav__links">
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <div className="main-nav__toggle">
                    <FontAwesomeIcon icon={faBars} onClick={toggleSideBar} />
                </div>
            </nav>
            <Sidebar mobileView={mobileView} setView={toggleSideBar} />
        </header>
    )
};

export default Navbar;