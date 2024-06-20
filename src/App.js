import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TopBar from './components/TopBar'; // Імпорт верхньої панелі
import NavigationBar from './components/NavigationBar'; // Імпорт нижньої панелі

function App() {
    const [userInfo, setUserInfo] = useState(null);
    const [walletConnected, setWalletConnected] = useState(false);

    useEffect(() => {
        // Логіка для отримання нікнейму користувача з Telegram акаунту
        const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        setUserInfo(storedUserInfo);
        // Логіка для перевірки підключення криптогаманця
        setWalletConnected(true);
    }, []);

    return (
        <Router>
            <div className="app-container">
                <TopBar username={userInfo?.username} walletConnected={walletConnected} />
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
                <NavigationBar />
            </div>
        </Router>
    );
}

export default App;