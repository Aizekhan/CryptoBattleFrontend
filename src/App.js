import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import TopBar from './components/TopBar';
import './App.css';

function App() {
    const [userInfo, setUserInfo] = useState({
        username: '',
        level: 0,
        tapIncome: 0,
        hourlyIncome: 0,
        balance: 0,
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

            // Збереження токену в localStorage для подальшого використання
            localStorage.setItem('authToken', token);

            // Отримання додаткових даних користувача з бекенду
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
                    tapIncome={userInfo.tapIncome}
                    level={userInfo.level}
                    hourlyIncome={userInfo.hourlyIncome}
                />
                <nav className="nav-bar">
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<div>Profile Page</div>} />  {/* Замініть на ваш компонент профілю */}
                    <Route path="/about" element={<div>About Page</div>} />  {/* Замініть на ваш компонент про додаток */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;