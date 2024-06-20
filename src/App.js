import React, { useState } from 'react'; // Видалено useEffect
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';

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
                <TopBar 
                    username={userInfo.username}
                    level={userInfo.level}
                    tapIncome={userInfo.tapIncome}
                    hourlyIncome={userInfo.hourlyIncome}
                    balance={userInfo.balance}
                />
                <nav className="nav-bar">
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/about">About</Link>
                </nav>
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