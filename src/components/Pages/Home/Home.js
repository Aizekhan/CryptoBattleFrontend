import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../../Panels/SubNavigation';

const Home = () => {
    const subPages = [
    { path: 'sub1', name: 'News' },
    { path: 'sub2', name: 'Market' },
    { path: 'sub3', name: 'Info' },

      
    ];

    return (
        <div>
            <SubNavigation basePath="/home" subPages={subPages} />
            <Outlet />{/* Тут відображається вміст дочірніх маршрутів */}
        </div>
    );
};

export default Home;
