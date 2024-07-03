import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import battleIcon from '../../assets/icons/NavPanel/battle-icon.png';
import farmIcon from '../../assets/icons/NavPanel/farm-icon.png';
import friendsIcon from '../../assets/icons/NavPanel/friends-icon.png';
import heroIcon from '../../assets/icons/NavPanel/hero-icon.png';
import homeIcon from '../../assets/icons/NavPanel/home-icon.png';
import minesIcon from '../../assets/icons/NavPanel/mines-icon.png';
import questsIcon from '../../assets/icons/NavPanel/quests-icon.png';
import './MainLayout.css';
import SubNavigation from './SubNavigation';

const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const basePath = location.pathname.split('/')[1];

    const subPagesConfig = {
        home: [
            { path: 'sub1', name: 'News' },
            { path: 'sub2', name: 'Market' },
            { path: 'sub3', name: 'Info' }
        ],
        farm: [
            { path: 'sub1', name: 'Hunt' },
            { path: 'sub2', name: 'Locations' },
            { path: 'sub3', name: 'HeroFarmSkills' }
        ],
        mines: [
            { path: 'sub1', name: 'MinesGold' },
            { path: 'sub2', name: 'MiningSkills' }
        ],
        battle: [
            { path: 'sub1', name: 'HeroDisplay' },
            { path: 'pvp-battle', name: 'PvPBattle' },
            { path: 'sub2', name: 'HeroBattleCards' },
            { path: 'sub3', name: 'Rank' }
        ],
        hero: [
            { path: 'sub1', name: 'HeroDetails' },
            { path: 'sub2', name: 'HeroPassiveSkills' },
            { path: 'sub3', name: 'HeroEquipment' }
        ],
        friends: [
            { path: 'sub1', name: 'AllFriends' }
        ],
        quests: [
            { path: 'sub1', name: 'Active' },
            { path: 'sub2', name: 'Daily' },
            { path: 'sub3', name: 'Profa' }
        ]
    };

    const subPages = subPagesConfig[basePath] || [];

    return (
        <div className="main-layout">
            <div className="nav-icons">
                <img src={homeIcon} alt="Home" onClick={() => navigate('/home')} className="nav-icon" />
                <img src={farmIcon} alt="Farm" onClick={() => navigate('/farm')} className="nav-icon" />
                <img src={battleIcon} alt="Battle" onClick={() => navigate('/battle')} className="nav-icon" />
                <img src={heroIcon} alt="Hero" onClick={() => navigate('/hero')} className="nav-icon" />
                <img src={friendsIcon} alt="Friends" onClick={() => navigate('/friends')} className="nav-icon" />
                <img src={minesIcon} alt="Mines" onClick={() => navigate('/mines')} className="nav-icon" />
                <img src={questsIcon} alt="Quests" onClick={() => navigate('/quests')} className="nav-icon" />
            </div>
            <SubNavigation basePath={`/${basePath}`} subPages={subPages} />
            <div className="content">
                <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            </div>
        </div>
    );
};

export default MainLayout;
