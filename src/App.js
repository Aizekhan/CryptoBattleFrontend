import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import MainLayout from './components/Panels/MainLayout';
import './App.css';
import { useUserStats, UserStatsProvider } from './context/UserStatsContext';
import Login from './components/Login';

// Імпорт сторінок і субвкладок
import Home from './components/Pages/Home/Home';
import News from './components/Pages/Home/News';
import Market from './components/Pages/Home/Market';
import Info from './components/Pages/Home/Info';

import Farm from './components/Pages/Farm/Farm';
import Hunt from './components/Pages/Farm/Hunt';
import Locations from './components/Pages/Farm/Locations';
import Skills from './components/Pages/Farm/Skills';

import Mines from './components/Pages/Mines/Mines';
import MinesGold from './components/Pages/Mines/MinesGold';
import MinesSkills from './components/Pages/Mines/MiningSkills';

import Battle from './components/Pages/Battle/Battle';
import PvP from './components/Pages/Battle/PvP';
import Cards from './components/Pages/Battle/Cards';
import Rank from './components/Pages/Battle/Rank';

import Hero from './components/Pages/Hero/Hero';
import Char from './components/Pages/Hero/Char';
import Passive from './components/Pages/Hero/Passive';
import Equip from './components/Pages/Hero/Equip';

import Friends from './components/Pages/Friends/Friends';
import AllFriends from './components/Pages/Friends/AllFriends';

import Quests from './components/Pages/Quests/Quests';
import Active from './components/Pages/Quests/Active';
import Daily from './components/Pages/Quests/Daily';
import Profa from './components/Pages/Quests/Profa';

function App() {
    const { updateUserStats } = useUserStats();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token') || localStorage.getItem('authToken');
        if (token) {
            const decoded = jwt_decode(token);
            updateUserStats({
                username: decoded.username
            });

            localStorage.setItem('authToken', token);

            axios
                .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/${decoded.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": 'application/json',
                        "Access-Control-Allow-Origin": "*"
                    },
                })
                .then((response) => {
                    updateUserStats({
                        username: response.data.username,
                        level: response.data.level,
                        tapIncome: response.data.tapIncome,
                        hourlyIncome: response.data.hourlyIncome,
                        balance: response.data.balance,
                        mines: response.data.mines,
                    });
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        } else {
            console.error('Decoded token does not contain user ID');
        }
    }, [updateUserStats]);

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={localStorage.getItem('authToken') ? <MainLayout /> : <Login />}>
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
                        <Route path="sub3" element={<Skills />} />
                    </Route>
                    <Route path="mines" element={<Mines />}>
                        <Route index element={<Navigate to="sub1" />} /> {/* Redirect to MinesGold by default */}
                        <Route path="sub1" element={<MinesGold />} />
                        <Route path="sub2" element={<MiningSkills />} />
                    </Route>
                    <Route path="battle" element={<Battle />}>
                        <Route index element={<Navigate to="sub1" />} /> {/* Redirect to PvP by default */}
                        <Route path="sub1" element={<PvP />} />
                        <Route path="sub2" element={<Cards />} />
                        <Route path="sub3" element={<Rank />} />
                    </Route>
                    <Route path="hero" element={<Hero />}>
                        <Route index element={<Navigate to="sub1" />} /> {/* Redirect to Char by default */}
                        <Route path="sub1" element={<Char />} />
                        <Route path="sub2" element={<Passive />} />
                        <Route path="sub3" element={<Equip />} />
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
