import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubNavigation.css';

const SubNavigation = ({ isBattlePage, basePath, subPages }) => {
    if (isBattlePage) {
        return null; // Не відображати субвкладки під час битви
    }

    return (
        <div className="sub-navigation">
            {subPages.map((subPage) => (
                <NavLink key={subPage.path} to={`${basePath}/${subPage.path}`} className="sub-nav-link">
                    {subPage.name}
                </NavLink>
            ))}
        </div>
    );
};

export default SubNavigation;
