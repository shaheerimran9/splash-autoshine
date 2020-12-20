import React from 'react';
import { Link } from 'react-router-dom';

import './Showcase.css';

const Showcase = () => {
    return (
        <div className="showcase">
            <div className="showcase__content">
                <p className="slogan">SHINE UP YOUR RIDE!</p>
                <h1 className="title">SPLASH AUTO-SHINE</h1>
                <h2 className="tagline">CAR DETAILING</h2>
                <Link to="/services" className="showcase-btn">VIEW OUR SERVICES</Link>
            </div>
        </div>
    )
};

export default Showcase;