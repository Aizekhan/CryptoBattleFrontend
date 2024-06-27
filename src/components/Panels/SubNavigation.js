import React from 'react';
import { NavLink } from 'react-router-dom';

const SubNavigation = ({ basePath, subPages }) => {
    return (
        <nav className="sub-navigation">
            {subPages.map((page) => (
                <NavLink key={page.path} to={`${basePath}/${page.path}`} className="nav-link">
                    {page.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default SubNavigation;
