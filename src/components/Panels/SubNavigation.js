import React from 'react';
import { Link } from 'react-router-dom';

import subPageIcon from '../../assets/icons/NavPanel/subPage.png';

const SubNavigation = ({ basePath, subPages, isBattlePage }) => {
    if (isBattlePage) {
        return null; // Не відображати SubNavigation під час битви
    }

    return (
        <div className="sub-navigation">
            {subPages.map((subPage, index) => (
                <Link key={index} to={`${basePath}/${subPage.path}`} className="sub-nav-button">
                    <img src={subPageIcon} alt={subPage.name} className="sub-nav-icon" />
                    <span>{subPage.name}</span>
                </Link>
            ))}
        </div>
    );
};

export default SubNavigation;
