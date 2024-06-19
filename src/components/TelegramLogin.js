import React, { useEffect } from 'react';

const TelegramLogin = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://telegram.org/js/telegram-widget.js?7";
        script.setAttribute('data-telegram-login', 'cryptobattle'); // Замініть 'cryptobattlebot' на фактичне ім'я вашого бота
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-auth-url', 'https://cryptobattle-2591e5064184.herokuapp.com/auth/telegram/callback'); // Замініть 'your-backend-url' на фактичну URL вашого бекенду
        script.setAttribute('data-request-access', 'write');
        script.async = true;

        document.getElementById('telegram-login-container').appendChild(script);
    }, []);

    return (
        <div id="telegram-login-container"></div>
    );
};

export default TelegramLogin;