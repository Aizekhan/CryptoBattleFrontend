import React from 'react';
import { Outlet } from 'react-router-dom';

const Battle = () => {
    return (
        <div>
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Battle;
