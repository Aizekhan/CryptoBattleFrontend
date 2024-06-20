// src/App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Farm from './components/Pages/Farm';
import Mines from './components/Pages/Mines';
import Battle from './components/Pages/Battle';
import Quests from './components/Pages/Quests';
import Hero from './components/Pages/Hero';
import Home from './components/Pages/Home';
import Friends from './components/Pages/Friends';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';
import SecondaryBar from './components/SecondaryBar';
import UserStats from './components/UserStats';
import './App.css';

function App() {
    const [userInfo, setUserInfo] = useState({
        username: '',
        level: 1,
        tapIncome: 0,
        hourlyIncome: 0,
        balance: 1000,
        heroes: [],
        currentHero: null,
        mines: []
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            const decoded = jwt_decode(token);
            setUserInfo(prevState => ({
                ...prevState,
                username: decoded.username
            }));

            localStorage.setItem('authToken', token);

            axios.get(`/api/users/${decoded.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUserInfo(prevState => ({
                    ...prevState,
                    level: response.data.level,
                    tapIncome: response.data.tapIncome,
                    hourlyIncome: response.data.hourlyIncome,
                    balance: response.data.balance,
                    heroes: response.data.heroes,
                    currentHero: response.data.currentHero,
                    mines: response.data.mines
                }));
            }).catch(error => {
                console.error('Error fetching user data:', error);
            });
        }
    }, []);

    return (
        <Router>
            <div className="app-container">
                <TopBar 
                    username={userInfo.username}
                    level={userInfo.level}
                    balance={userInfo.balance}
                />
                <UserStats 
                    username={userInfo.username}
                    level={userInfo.level}
                    hourlyIncome={userInfo.hourlyIncome}
                    balance={userInfo.balance}
                />
                <SecondaryBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/farm" element={<Farm />} />
                    <Route path="/mines" element={<Mines balance={userInfo.balance} setBalance={(newBalance) => setUserInfo(prevState => ({ ...prevState, balance: newBalance }))} />} />
                    <Route path="/battle" element={<Battle />} />
                    <Route path="/quests" element={<Quests />} />
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/friends" element={<Friends />} />
                </Routes>
                <NavigationBar />
            </div>
        </Router>
    );
}

export default App;
