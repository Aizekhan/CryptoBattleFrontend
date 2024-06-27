import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubNavigation.css'; // Додамо стилі для SubNavigation

const SubNavigation = ({ basePath, subPages }) => {
    return (
        <nav className="sub-navigation">
            {subPages.map((page) => (
                <NavLink
                    key={page.path}
                    to={`${basePath}/${page.path}`}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                    {page.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default SubNavigation;
