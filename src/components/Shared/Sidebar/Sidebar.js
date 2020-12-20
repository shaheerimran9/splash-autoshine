import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHome, faCog, faPhone, faBuilding } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.css';

const Sidebar = props => {
    const toggleHandler = () => {
        props.setView();
    };
    return (
        <nav className="side-nav" style={
            { visibility: props.mobileView === true ? 'visible' : 'hidden' }
        }
        >
            <div className="side-nav__toggle">
                <FontAwesomeIcon icon={faTimes} onClick={toggleHandler} />
            </div>
            <ul className="side-nav__links">
                <li onClick={toggleHandler}><Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link></li>
                <li onClick={toggleHandler}><Link to="/services"><FontAwesomeIcon icon={faCog} />Services</Link></li>
                <li onClick={toggleHandler}><Link to="/contact"><FontAwesomeIcon icon={faPhone} />Contact</Link></li>
                <li onClick={toggleHandler}><Link to="/about"><FontAwesomeIcon icon={faBuilding} />About</Link></li>
            </ul>
        </nav>
    )
};

export default Sidebar;