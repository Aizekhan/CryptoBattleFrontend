import React from 'react';
import { Outlet } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-page">
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Hero;