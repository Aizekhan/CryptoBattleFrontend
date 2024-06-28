import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Friends = () => {
    const subPages = [
        { path: 'sub1', name: 'AllFriends' },
     
    ];

    return (
        <div>
            <SubNavigation basePath="/friends" subPages={subPages} />
            <Outlet />{/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Friends;
