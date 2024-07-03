import React from 'react';
import { Outlet } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Hero;
