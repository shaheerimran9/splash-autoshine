import React, { useState, useEffect } from 'react';

import './HomePackages.css';

import packages from './packages.json';
import Divider from '../../Shared/Divider/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faShuttleVan, faTruck, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import HomePackageList from '../HomePackageList/HomePackageList';

const HomePackages = () => {
    const [currentPackage, setCurrentPackage] = useState('Regular Sized Car');
    const [washData, setWashData] = useState([]);

    useEffect(() => {
        setWashData(packages);
    }, []);

    const handleClick = (e) => {
        const packages = document.querySelectorAll('.package');

        if (packages.length > 0) {
            packages.forEach(p => {
                p.classList.remove('selected');
            })
        }
        if (e.target.parentElement.classList.contains('package')) {
            setCurrentPackage(e.target.innerText);
            e.target.parentElement.classList.add('selected');
        }
    }

    return (
        <section className="home-packages">
            <Divider heading="WASH PACKAGES" subheading="Which wash is the best for your vehicle?" />
            <div className="home-packages__packages">
                <div className="package selected" onClick={handleClick}>
                    <div className="package__icon">
                        <FontAwesomeIcon icon={faCar} />
                    </div>
                    <h3 className="package__name">Regular Sized Car</h3>
                </div>
                <div className="package" onClick={handleClick}>
                    <div className="package__icon">
                        <FontAwesomeIcon icon={faCar} />
                    </div>
                    <h3 className="package__name">Medium Sized Car</h3>
                </div>
                <div className="package" onClick={handleClick}>
                    <div className="package__icon">
                        <FontAwesomeIcon icon={faCar} />
                    </div>
                    <h3 className="package__name">Compact SUV</h3>
                </div>
                <div className="package" onClick={handleClick}>
                    <div className="package__icon">
                        <FontAwesomeIcon icon={faShuttleVan} />
                    </div>
                    <h3 className="package__name">Minivan</h3>
                </div>
                <div className="package" onClick={handleClick}>
                    <div className="package__icon">
                        <FontAwesomeIcon icon={faTruckPickup} />
                    </div>
                    <h3 className="package__name">Pickup Truck</h3>
                </div>
                <div className="package" onClick={handleClick}>
                    <div className="package__icon">
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <h3 className="package__name">Cargo Truck</h3>
                </div>
            </div>
            <div className="home-washes">
                {washData.map(item => {
                    if (item.type === currentPackage) {
                        return item.packages.map(wash => {
                            return <HomePackageList
                                key={wash.name}
                                wash_title={wash.name}
                                wash_price={wash.price}
                                wash_time={wash.time}
                                features={wash.features} />
                        })
                    }
                })}
            </div>
        </section>
    )
};

export default HomePackages;