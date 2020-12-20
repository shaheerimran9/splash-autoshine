import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import './HomeContent.css';

const HomeContent = () => {
    return (
        <section className="home-about">
            <div className="home-about__image">
            </div>
            <div className="home-about__content">
                <p className="content-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus! Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
                <div className="content-secondary">
                    <div className="content-secondary__section">
                        <FontAwesomeIcon icon={faTint} className="section-icon" />
                        <h3 className="section-heading">SUPERIOR CAR WASHING</h3>
                        <ul className="section-list">
                            <li><span>Lorem ipsum dolor sit amet, consectetur</span></li>
                            <li><span>Lorem ipsum dolor sit amet, consectetur</span></li>
                            <li><span>Lorem ipsum dolor sit amet, consectetur</span></li>
                            <li><span>Lorem ipsum dolor sit amet, consectetur</span></li>
                            <li><span>Lorem ipsum dolor sit amet, consectetur</span></li>
                        </ul>
                    </div>
                    <div className="content-secondary__section">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className="section-icon" />
                        <h3 className="section-heading">CONTACTING US</h3>
                        <ul className="section-list">
                            <li><span>Lorem ipsum dolor sit amet, consectetur adipisicing</span></li>
                            <li><span>Lorem ipsum dolor sit amet, consectetur adipisicing</span></li>
                            <li><span>Lorem ipsum dolor sit amet, consectetur adipisicing</span></li>
                            <li><span>Lorem ipsum dolor sit amet, consectetur adipisicing</span></li>
                            <li><span>Lorem ipsum dolor sit amet, consectetur adipisicing</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContent;