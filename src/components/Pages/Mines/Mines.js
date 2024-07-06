import React from 'react';
import { Outlet } from 'react-router-dom';

const Mines = () => {
    return (
        <div className="mines">
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Mines;
