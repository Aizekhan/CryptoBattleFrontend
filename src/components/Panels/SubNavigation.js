import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SubNavigation.css';

const SubNavigation = ({ basePath, subPages, isBattlePage }) => {
    const location = useLocation();

    if (isBattlePage) {
        return null; // Не відображати SubNavigation під час битви
    }

    return (
        <div className="sub-navigation">
            {subPages.map((subPage, index) => (
                <Link key={index} to={`${basePath}/${subPage.path}`} className="sub-nav-button">
                    {subPage.name}
                </Link>
            ))}
        </div>
    );
};

export default SubNavigation;
