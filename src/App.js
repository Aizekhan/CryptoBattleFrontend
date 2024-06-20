import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';
import StatsBar from './components/StatsBar';

function App() {
    const [userInfo] = useState({
        username: 'Максим',
        level: 7,
        tapIncome: '+15',
        hourlyIncome: '+992,27K',
        balance: '24 160 678'
    });

    return (
        <Router>
            <div className="app-container">
                <TopBar username={userInfo.username} />
                <StatsBar 
                    tapIncome={userInfo.tapIncome}
                    level={userInfo.level}
                    hourlyIncome={userInfo.hourlyIncome}
                />
                <div className="balance">
                    <span className="balance-icon">💰</span>
                    <span>{userInfo.balance}</span>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<div>Profile Page</div>} />
                    <Route path="/about" element={<div>About Page</div>} />
                </Routes>
                <NavigationBar />
            </div>
        </Router>
    );
}

export default App;