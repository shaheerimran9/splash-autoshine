import React from 'react';

import './HomeTeam.css';

import { faUserFriends, faLeaf, faMapMarkedAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HomeTeam = () => {
    return (
        <section className="home-team">
            <div className="home-team__img"></div>
            <div className="home-team__content">
                <div className="content__feature">
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="feature__icon"/>
                    <h3 className="feature__title">Lorem ipsum dolar</h3>
                    <p className="feature__description">We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.</p>
                </div>
                <div className="content__feature">
                    <FontAwesomeIcon icon={faLeaf} className="feature__icon"/>
                    <h3 className="feature__title">Lorem ipsum dolar</h3>
                    <p className="feature__description">We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.</p>
                </div>
                <div className="content__feature">
                    <FontAwesomeIcon icon={faUserFriends} className="feature__icon"/>
                    <h3 className="feature__title">Lorem ipsum dolar</h3>
                    <p className="feature__description">We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.</p>
                </div>
                <div className="content__feature">
                    <FontAwesomeIcon icon={faMoneyBill} className="feature__icon"/>
                    <h3 className="feature__title">Lorem ipsum dolar</h3>
                    <p className="feature__description">We are dedicated to providing quality service, customer satisfaction at a great value in multiple locations offering convenient hours.</p>
                </div>
            </div>
        </section>
    )
};

export default HomeTeam;