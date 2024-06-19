import React from 'react';
import './App.css';  // Додайте цей імпорт
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <div className="app-container">
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