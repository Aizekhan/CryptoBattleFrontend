import React from 'react';
import { Outlet } from 'react-router-dom';

const Friends = () => {
    return (
        <div>
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Friends;
