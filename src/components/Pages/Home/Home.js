import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Home;
