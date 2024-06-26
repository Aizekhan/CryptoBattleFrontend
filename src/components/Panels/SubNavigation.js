import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SubNavigation.css';

const SubNavigation = ({ basePath, subPages }) => {
    const location = useLocation();

    return (
        <div className="sub-navigation">
            {subPages.map((subPage, index) => (
                <Link
                    key={index}
                    to={`${basePath}/${subPage.path}`}
                    className={location.pathname === `${basePath}/${subPage.path}` ? 'active' : ''}
                >
                    {subPage.name}
                </Link>
            ))}
        </div>
    );
};

export default SubNavigation;
