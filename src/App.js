import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Panels/MainLayout';
import './App.css';
import Home from './components/Pages/Home';
import Farm from './components/Pages/Farm';
import Mines from './components/Pages/Mines';
import Battle from './components/Pages/Battle';
import Quests from './components/Pages/Quests';
import Hero from './components/Pages/Hero';
import Friends from './components/Pages/Friends';
import Login from './components/Pages/Login';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<MainLayout />}>
                    <Route path="home/*" element={<Home />} />
                    <Route path="farm/*" element={<Farm />} />
                    <Route path="mines/*" element={<Mines />} />
                    <Route path="battle/*" element={<Battle />} />
                    <Route path="quests/*" element={<Quests />} />
                    <Route path="hero/*" element={<Hero />} />
                    <Route path="friends/*" element={<Friends />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
