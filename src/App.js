import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Panels/MainLayout';
import { useUserStats } from './components/UserStatsContext';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

import Home from './components/Pages/Home';
import Farm from './components/Pages/Farm';
import Mines from './components/Pages/Mines';
import Battle from './components/Pages/Battle';
import Quests from './components/Pages/Quests';
import Hero from './components/Pages/Hero';
import Friends from './components/Pages/Friends';
import Login from './components/Login'; // Додайте компонент Login, якщо у вас є

const App = () => {
    const { updateUserStats } = useUserStats();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            const decoded = jwt_decode(token);
            updateUserStats({
                username: decoded.username
            });

            localStorage.setItem('authToken', token);

            axios
                .get(`/api/users/${decoded.id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    updateUserStats({
                        level: response.data.level,
                        tapIncome: response.data.tapIncome,
                        hourlyIncome: response.data.hourlyIncome,
                        balance: response.data.balance,
                    });
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [updateUserStats]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="farm" element={<Farm />} />
                    <Route path="mines" element={<Mines />} />
                    <Route path="battle" element={<Battle />} />
                    <Route path="quests" element={<Quests />} />
                    <Route path="hero" element={<Hero />} />
                    <Route path="friends" element={<Friends />} />
                </Route>
                <Route path="login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
