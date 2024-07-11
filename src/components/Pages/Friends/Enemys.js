import React from 'react';
import { Outlet } from 'react-router-dom';

const Enemys = () => {
    return (
        <div>
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Enemys;
