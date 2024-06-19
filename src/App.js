import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import CreateHero from './components/CreateHero';
import HeroList from './components/HeroList';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="/create-hero" element={<PrivateRoute><CreateHero /></PrivateRoute>} />
                <Route path="/hero-list" element={<PrivateRoute><HeroList /></PrivateRoute>} />
            </Routes>
        </Router>
    );
};

export default App;