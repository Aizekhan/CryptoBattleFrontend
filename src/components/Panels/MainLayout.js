import React from 'react';
import { Routes, Route, useNavigate, Outlet, Navigate } from 'react-router-dom';
import battleIcon from '../assets/icons/NavPanel/battle-icon.png';
import farmIcon from '../assets/icons/NavPanel/farm-icon.png';
import friendsIcon from '../assets/icons/NavPanel/friends-icon.png';
import heroIcon from '../assets/icons/NavPanel/hero-icon.png';
import homeIcon from '../assets/icons/NavPanel/home-icon.png';
import minesIcon from '../assets/icons/NavPanel/mines-icon.png';
import questsIcon from '../assets/icons/NavPanel/quests-icon.png';
import './MainLayout.css';
import Home from '../Pages/Home';
import Farm from '../Pages/Farm';
import Battle from '../Pages/Battle';
import Hero from '../Pages/Hero';
import Friends from '../Pages/Friends';
import Mines from '../Pages/Mines';
import Quests from '../Pages/Quests';
import News from '../Pages/Home/News';
import Market from '../Pages/Home/Market';
import Info from '../Pages/Home/Info';
import Hunt from '../Pages/Farm/Hunt';
import Locations from '../Pages/Farm/Locations';
import HeroFarmSkills from '../Pages/Farm/HeroFarmSkills';
import MinesGold from '../Pages/Mines/MinesGold';
import MiningSkills from '../Pages/Mines/MiningSkills';
import HeroDisplay from '../Pages/Battle/HeroDisplay';
import PvPBattle from '../Pages/Battle/BattleScene/PvPBattle';
import HeroBattleCards from '../Pages/Battle/HeroBattleCards';
import Rank from '../Pages/Battle/Rank';
import HeroDetails from '../Pages/Hero/HeroDetails';
import HeroPassiveSkills from '../Pages/Hero/HeroPassiveSkills';
import HeroEquipment from '../Pages/Hero/HeroEquipment';
import AllFriends from '../Pages/Friends/AllFriends';
import Active from '../Pages/Quests/Active';
import Daily from '../Pages/Quests/Daily';
import Profa from '../Pages/Quests/Profa';

const MainLayout = () => {
    const navigate = useNavigate();

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
            <div className="content">
                <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            </div>
        </div>
    );
};

const MainRoutes = () => (
    <Routes>
        <Route path="/" element={localStorage.getItem('authToken') ? <MainLayout /> : <Navigate to="/login" />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />}>
                <Route index element={<Navigate to="sub1" />} /> {/* Redirect to News by default */}
                <Route path="sub1" element={<News />} />
                <Route path="sub2" element={<Market />} />
                <Route path="sub3" element={<Info />} />
            </Route>
            <Route path="farm" element={<Farm />}>
                <Route index element={<Navigate to="sub1" />} /> {/* Redirect to Hunt by default */}
                <Route path="sub1" element={<Hunt />} />
                <Route path="sub2" element={<Locations />} />
                <Route path="sub3" element={<HeroFarmSkills />} />
            </Route>
            <Route path="mines" element={<Mines />}>
                <Route index element={<Navigate to="sub1" />} /> {/* Redirect to MinesGold by default */}
                <Route path="sub1" element={<MinesGold />} />
                <Route path="sub2" element={<MiningSkills />} />
            </Route>
            <Route path="battle" element={<Battle />}>
                <Route index element={<Navigate to="sub1" />} /> {/* Redirect to HeroDisplay by default */}
                <Route path="sub1" element={<HeroDisplay />} />
                <Route path="pvp-battle" element={<PvPBattle />} />
                <Route path="sub2" element={<HeroBattleCards />} />
                <Route path="sub3" element={<Rank />} />
            </Route>
            <Route path="hero" element={<Hero />}>
                <Route index element={<Navigate to="sub1" />} /> {/* Redirect to HeroDetails by default */}
                <Route path="sub1" element={<HeroDetails />} />
                <Route path="sub2" element={<HeroPassiveSkills />} />
                <Route path="sub3" element={<HeroEquipment />} />
            </Route>
            <Route path="friends" element={<Friends />}>
                <Route index element={<Navigate to="sub1" />} /> {/* Redirect to AllFriends by default */}
                <Route path="sub1" element={<AllFriends />} />
            </Route>
            <Route path="quests" element={<Quests />}>
                <Route index element={<Navigate to="sub1" />} /> {/* Redirect to Active by default */}
                <Route path="sub1" element={<Active />} />
                <Route path="sub2" element={<Daily />} />
                <Route path="sub3" element={<Profa />} />
            </Route>
        </Route>
    </Routes>
);

export { MainLayout, MainRoutes };
