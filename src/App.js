import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUserStats, UserStatsProvider } from './context/UserStatsContext';
import MainLayout from './components/Panels/MainLayout';
import ChooseHero from './components/ChooseHero';
import Login from './Login';
import Home from './components/Pages/Home/Home';
import Farm from './components/Pages/Farm/Farm';
import Battle from './components/Pages/Battle/Battle';
import Hero from './components/Pages/Hero/Hero';
import Friends from './components/Pages/Friends/Friends';
import Mines from './components/Pages/Mines/Mines';
import Quests from './components/Pages/Quests/Quests';
import Town from './components/Pages/Home/Town';
import Market from './components/Pages/Home/Market';
import Hunt from './components/Pages/Farm/Hunt';
import Dungeons from './components/Pages/Farm/Dungeons';
import Monsters from './components/Pages/Farm/Monsters';
import Locations from './components/Pages/Home/Locations';
import HeroFarmSkills from './components/Pages/Mines/HeroFarmSkills';
import MinesGold from './components/Pages/Mines/MinesGold';
import MiningSkills from './components/Pages/Mines/MiningSkills';
import HeroDisplay from './components/Pages/Battle/HeroDisplay';
import PvPBattle from './components/Pages/Battle/BattleScene/PvPBattle';
import HeroBattleCards from './components/Pages/Battle/HeroBattleCards';
import Rank from './components/Pages/Battle/Rank';
import HeroDetails from './components/Pages/Hero/HeroDetails';
import HeroPassiveSkills from './components/Pages/Hero/HeroPassiveSkills';
import HeroEquipment from './components/Pages/Hero/HeroEquipment';
import AllFriends from './components/Pages/Friends/AllFriends';
import Enemys from './components/Pages/Friends/Enemys';
import Active from './components/Pages/Quests/Active';
import Daily from './components/Pages/Quests/Daily';
import Profa from './components/Pages/Quests/Profa';

function App() {
    const { userStats } = useUserStats();

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/choose-hero" element={<ChooseHero />} />
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to={userStats && userStats.heroes.length > 0 ? "/hero/sub1" : "/choose-hero"} />} />
                    <Route path="home" element={<Home />}>
                        <Route index element={<Navigate to="sub1" />} />
                        <Route path="sub1" element={<Town />} />
                        <Route path="sub2" element={<Market />} />
                        <Route path="sub3" element={<Locations />} />
                    </Route>
                    <Route path="farm" element={<Farm />}>
                        <Route index element={<Navigate to="sub1" />} />
                        <Route path="sub1" element={<Hunt />} />
                        <Route path="sub2" element={<Dungeons />} />
                        <Route path="sub3" element={<Monsters />} />
                    </Route>
                    <Route path="mines" element={<Mines />}>
                        <Route index element={<Navigate to="sub1" />} />
                        <Route path="sub1" element={<MinesGold />} />
                        <Route path="sub2" element={<MiningSkills />} />
                        <Route path="sub3" element={<HeroFarmSkills />} />
                    </Route>
                    <Route path="battle" element={<Battle />}>
                        <Route index element={<Navigate to="sub1" />} />
                        <Route path="sub1" element={<HeroDisplay />} />
                        <Route path="pvp-battle" element={<PvPBattle />} />
                        <Route path="sub2" element={<HeroBattleCards />} />
                        <Route path="sub3" element={<Rank />} />
                    </Route>
                    <Route path="hero" element={<Hero />}>
                        <Route index element={<Navigate to="sub1" />} />
                        <Route path="sub1" element={<HeroDetails />} />
                        <Route path="sub2" element={<HeroPassiveSkills />} />
                        <Route path="sub3" element={<HeroEquipment />} />
                    </Route>
                    <Route path="friends" element={<Friends />}>
                        <Route index element={<Navigate to="sub1" />} />
                        <Route path="sub1" element={<AllFriends />} />
                        <Route path="sub2" element={<Enemys />} />
                    </Route>
                    <Route path="quests" element={<Quests />}>
                        <Route index element={<Navigate to="sub1" />} />
                        <Route path="sub1" element={<Active />} />
                        <Route path="sub2" element={<Daily />} />
                        <Route path="sub3" element={<Profa />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default function AppWrapper() {
    return (
        <UserStatsProvider>
            <App />
        </UserStatsProvider>
    );
}
