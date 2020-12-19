import React from 'react';

import './HomeProcess.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSearch, faCreditCard, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const HomeProcess = () => {
    return (
        <section className="home-process">
            <div className="home-process__title">
                <h3 className="title__heading">OUR PROCESS</h3>
                <p className="title__subheading"><em>We know your time is valuable</em></p>
            </div>
            <div className="home-process__steps">
                <div className="step">
                    <div className="step__icon">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <h3 className="step__description">1. Booking</h3>
                </div>
                <div className="step">
                    <div className="step__icon">
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <h3 className="step__description">2. Inspection</h3>
                </div>
                <div className="step">
                    <div className="step__icon">
                        <FontAwesomeIcon icon={faCreditCard} />
                    </div>
                    <h3 className="step__description">3. Valuation</h3>
                </div>
                <div className="step">
                    <div className="step__icon">
                        <FontAwesomeIcon icon={faClipboardList} />
                    </div>
                    <h3 className="step__description">4. Completion</h3>
                </div>

            </div>
        </section>
    );
};

export default HomeProcess;