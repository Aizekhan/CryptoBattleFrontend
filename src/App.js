import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Mines from './components/Mines';
import Hero from './components/Hero';
import TopBar from './components/TopBar';
import NavigationBar from './components/NavigationBar';
import './App.css';

function App() {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/mines':
                return 'Дохід в годину';
            case '/hero':
                return 'Магазин';
            default:
                return 'Дохід за тап';
        }
    };

    return (
        <div className="app-container">
            <TopBar title={getTitle()} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mines" element={<Mines />} />
                <Route path="/hero" element={<Hero />} />
            </Routes>
            <NavigationBar />
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
