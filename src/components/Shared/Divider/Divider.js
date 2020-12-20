import React from 'react';

import './Divider.css';

const Divider = props => {
    return (
        <div className="divider">
            <h3 className="divider__heading">{props.heading}</h3>
            <p className="divider__subheading">{props.subheading}</p>
        </div>
    );
};

export default Divider;