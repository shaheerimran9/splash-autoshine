import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './HomePackageList.css';

const HomePackageList = props => {
    return (
        <div className="wash-package">
            <h3 className="wash-package__title">{props.wash_title}</h3>
            <h3 className="wash-package__price">$ {props.wash_price}</h3>
            <h3 className="wash-package__time">{<FontAwesomeIcon icon={faClock} />} {props.wash_time} min</h3>
            <ul className="wash-package__features">
                {props.features.map((feature, index) => {
                    return <li className="features__feature" key={index}>{feature}</li>
                })}
            </ul>
        </div>
    );
};

export default HomePackageList;