import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import appImages from '../../context/appImages'; // Імпортуємо іконки з appImages.js
import './MainLayout.css';
import SubNavigation from './SubNavigation';
import { useUserStats } from '../../context/UserStatsContext';
import HeroStatsCard from '../Pages/Hero/HeroDetails/HeroStatsCard'; // Імпортуємо компонент HeroStatsCard

const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const basePath = location.pathname.split('/')[1];
    const isHeroPage = basePath === 'hero';
    const fullPath = location.pathname;
    const isPvPBattle = fullPath === '/battle/pvp-battle';

    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId) || {};

    const subPagesConfig = {
        battle: [
            { path: 'sub1', name: 'PvP' },
            { path: 'sub2', name: 'BattleShop' },
            { path: 'sub3', name: 'Rank' }
        ],
        home: [
            { path: 'sub1', name: 'Town' },
            { path: 'sub2', name: 'Market' },
            { path: 'sub3', name: 'Location' }
        ],
        farm: [
            { path: 'sub1', name: 'Hunt' },
            { path: 'sub2', name: 'Dungeons' },
            { path: 'sub3', name: 'Monsters' }
        ],
        mines: [
            { path: 'sub1', name: 'MinesGold' },
            { path: 'sub2', name: 'MiningSkills' },
            { path: 'sub3', name: 'FarmSkills' }
        ],
        hero: [
            { path: 'sub1', name: 'Hero' },
            { path: 'sub2', name: 'PassiveSkills' },
            { path: 'sub3', name: 'Equipment' }
        ],
        friends: [
            { path: 'sub1', name: 'AllFriends' },
            { path: 'sub2', name: 'Enemys' }
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
            <div className={`nav-icons-wrapper ${isPvPBattle ? 'hidden' : ''}`}>
                <div className="nav-icons-top">
                    <img src={appImages.icons.home} alt="Home" onClick={() => navigate('/home')} className="nav-icon" />
                    <div className="balance-display">
                        <img src={appImages.icons.coin} alt="Coin" className="nav-icon" />
                        <span>{userStats.balance}</span>
                    </div>
                    <img src={appImages.icons.battle} alt="Battle" onClick={() => navigate('/battle')} className="nav-icon" />
                </div>
                <SubNavigation basePath={`/${basePath}`} subPages={subPages} />
                <div className={`nav-icon-hero ${isHeroPage ? 'hidden' : ''}`}>
                    <img src={appImages.icons.hero} alt="Hero" onClick={() => navigate('/hero')} className="nav-icon" />
                </div>
                <div className={`nav-icons-bottom ${isHeroPage ? 'move-icons' : ''}`}>
                    <img src={appImages.icons.farm} alt="Farm" onClick={() => navigate('/farm')} className="nav-icon" />
                    <img src={appImages.icons.mine} alt="Mine" onClick={() => navigate('/mines')} className="nav-icon mine-icon" />
                    <img src={appImages.icons.quest} alt="Quest" onClick={() => navigate('/quests')} className="nav-icon quest-icon" />
                    <img src={appImages.icons.addFriends} alt="Add Friends" onClick={() => navigate('/friends')} className="nav-icon" />
                </div>
            </div>
            <div className="content">
                <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            </div>
            {isHeroPage && (
                <div className="hero-stats-container">
                    <HeroStatsCard stats={currentHero.baseStats} />
                </div>
            )}
        </div>
    );
};

export default MainLayout;
