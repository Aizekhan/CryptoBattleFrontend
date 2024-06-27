import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import MainLayout from './components/Panels/MainLayout';
import './App.css';
import { useUserStats, UserStatsProvider } from './context/UserStatsContext';
import Login from './components/Login';
import Farm from './components/Pages/Farm/Farm';
import Mines from './components/Pages/Mines/Mines';
import MinesGold from './components/Pages/Mines/MinesGold';
import MinesRes from './components/Pages/Mines/MinesRes';
import MinesSkills from './components/Pages/Mines/MinesSkills';
import MinesCrystal from './components/Pages/Mines/MinesCrystal';
import Battle from './components/Pages/Battle/Battle';
import Quests from './components/Pages/Quests/Quests';
import Hero from './components/Pages/Hero/Hero';
import Home from './components/Pages/Home/Home';
import Friends from './components/Pages/Friends/Friends';

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
                        "Cache-Control": "no-cache"
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
                    <Route path="home" element={<Home />} />
                    <Route path="farm" element={<Farm />} />
                    <Route path="mines" element={<Mines />}>
                        <Route index element={<Navigate to="/mines/gold" />} /> {/* Redirect to MinesGold by default */}
                        <Route path="gold" element={<MinesGold />} />
                        <Route path="res" element={<MinesRes />} />
                        <Route path="skills" element={<MinesSkills />} />
                        <Route path="crystal" element={<MinesCrystal />} />
                    </Route>
                    <Route path="battle" element={<Battle />} />
                    <Route path="quests" element={<Quests />} />
                    <Route path="hero" element={<Hero />} />
                    <Route path="friends" element={<Friends />} />
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
