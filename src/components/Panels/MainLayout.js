import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import homeIcon from '../../assets/icons/NavPanel/home-icon.png';
import addFriendsIcon from '../../assets/icons/NavPanel/friends-icon.png';
import farmIcon from '../../assets/icons/NavPanel/farm-icon.png';
import heroIcon from '../../assets/icons/NavPanel/hero-icon.png';
import questIcon from '../../assets/icons/NavPanel/quests-icon.png';
import mineIcon from '../../assets/icons/NavPanel/mines-icon.png';
import battleIcon from '../../assets/icons/NavPanel/battle-icon.png';
import './MainLayout.css';
import SubNavigation from './SubNavigation';
import HeroStatsCard from './HeroDetails/HeroStatsCard'; // Імпортуємо компонент HeroStatsCard

const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const basePath = location.pathname.split('/')[1];
    const isHeroPage = basePath === 'hero';

    const subPagesConfig = {
        battle: [
            { path: 'pvp', name: 'PVP' },
            { path: 'ability', name: 'ABILITY' },
            { path: 'rank', name: 'RANK' }
        ],
        home: [
            { path: 'sub1', name: 'News' },
            { path: 'sub2', name: 'Market' },
            { path: 'sub3', name: 'Info' }
        ],
        farm: [
            { path: 'sub1', name: 'Hunt' },
            { path: 'sub2', name: 'Locations' },
            { path: 'sub3', name: 'FarmSkills' }
        ],
        mines: [
            { path: 'sub1', name: 'MinesGold' },
            { path: 'sub2', name: 'MiningSkills' }
        ],
        hero: [
            { path: 'sub1', name: 'Hero' },
            { path: 'sub2', name: 'PassiveSkills' },
            { path: 'sub3', name: 'Equipment' }
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
            <div className="nav-icons-top">
                <img src={homeIcon} alt="Home" onClick={() => navigate('/home')} className="nav-icon" />
                <img src={addFriendsIcon} alt="Add Friends" onClick={() => navigate('/friends')} className="nav-icon" />
            </div>
            <SubNavigation basePath={`/${basePath}`} subPages={subPages} />
            <div className="content">
                <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            </div>
            <div className={`nav-icon-battle ${isHeroPage ? 'move-up' : ''}`}>
                <img src={battleIcon} alt="Battle" onClick={() => navigate('/battle')} className="nav-icon" />
            </div>
            <div className={`nav-icons-bottom ${isHeroPage ? 'move-sides' : ''}`}>
                <img src={farmIcon} alt="Farm" onClick={() => navigate('/farm')} className="nav-icon" />
                <img src={heroIcon} alt="Hero" onClick={() => navigate('/hero')} className="nav-icon" />
                <img src={questIcon} alt="Quest" onClick={() => navigate('/quests')} className="nav-icon" />
                <img src={mineIcon} alt="Mine" onClick={() => navigate('/mines')} className="nav-icon" />
            </div>
            {isHeroPage && <HeroStatsCard stats={subPages} />} {/* Додаємо HeroStatsCard лише для сторінок героя */}
        </div>
    );
};

export default MainLayout;
