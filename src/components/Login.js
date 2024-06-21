// src/components/Pages/Login.js

import React from 'react';
import TelegramLogin from '../TelegramLogin'; // Оновлений шлях до TelegramLogin

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <TelegramLogin />
        </div>
    );
}

export default Login;
