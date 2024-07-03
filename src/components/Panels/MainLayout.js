import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './MainLayout.css';
import battleIcon from '../../assets/icons/NavPanel/battle-icon.png';
import farmIcon from '../../assets/icons/NavPanel/farm-icon.png';
import friendsIcon from '../../assets/icons/NavPanel/friends-icon.png';
import heroIcon from '../../assets/icons/NavPanel/hero-icon.png';
import homeIcon from '../../assets/icons/NavPanel/home-icon.png';
import minesIcon from '../../assets/icons/NavPanel/mines-icon.png';
import questsIcon from '../../assets/icons/NavPanel/quests-icon.png';
import Window from '../../assets/icons/NavPanel/Window.png';

import Home from '../Pages/Home/Home';
import Farm from '../Pages/Farm/Farm';
import Battle from '../Pages/Battle/Battle';
import Hero from '../Pages/Hero/Hero';
import Quests from '../Pages/Quests/Quests';
import Friends from '../Pages/Friends/Friends';
import MinesGold from '../Pages/Mines/MinesGold';
import MiningSkills from '../Pages/Mines/MiningSkills';
import News from '../Pages/Home/News';
import Market from '../Pages/Home/Market';
import Info from '../Pages/Home/Info';
import Hunt from '../Pages/Farm/Hunt';
import Locations from '../Pages/Farm/Locations';
import HeroFarmSkills from '../Pages/Farm/HeroFarmSkills';
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
    return (
        <div className="main-layout">
            <div className="top-bar">
                <img src={battleIcon} alt="Battle" className="icon" />
                <img src={Window} alt="Window" className="window-icon" />
                <img src={farmIcon} alt="Farm" className="icon" />
                <img src={friendsIcon} alt="Friends" className="icon" />
            </div>
            <div className="content">
                <Routes>
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
                    <Route path="mines" element={<MinesGold />}>
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
                </Routes>
                <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            </div>
            <div className="bottom-bar">
                <img src={homeIcon} alt="Home" className="icon" />
                <img src={heroIcon} alt="Hero" className="icon" />
                <img src={minesIcon} alt="Mines" className="icon" />
                <img src={questsIcon} alt="Quests" className="icon" />
            </div>
        </div>
    );
};

export default MainLayout;
