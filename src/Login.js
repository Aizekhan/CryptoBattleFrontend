import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TelegramLogin from './TelegramLogin';
import { useUserStats } from './context/UserStatsContext';
import authenticateWithTelegram from './authenticateWithTelegram';
import axios from 'axios';

const Login = () => {
    const { updateUserStats } = useUserStats();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, { username, password });
            const { token, user } = response.data;
            localStorage.setItem('authToken', token);
            updateUserStats(user);
            navigate('/'); // Перенаправлення на головну сторінку
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Authentication failed');
        }
    };

    const handleTelegramResponse = async (telegramData) => {
        const user = await authenticateWithTelegram(telegramData);
        if (user) {
            updateUserStats(user);
            navigate('/'); // Перенаправлення на головну сторінку
        } else {
            setError('Authentication failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <TelegramLogin botName={process.env.REACT_APP_TELEGRAM_BOT_USERNAME} handleTelegramResponse={handleTelegramResponse} />
        </div>
    );
};

export default Login;
