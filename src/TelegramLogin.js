import React, { useEffect } from 'react';

const TelegramLogin = ({ handleTelegramResponse }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://telegram.org/js/telegram-widget.js?7";
        script.setAttribute('data-telegram-login', process.env.REACT_APP_TELEGRAM_BOT_USERNAME);
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-auth-url', `${process.env.REACT_APP_BACKEND_URL}/api/auth/telegram`);
        script.setAttribute('data-request-access', 'write');
        script.async = true;

        script.onload = () => {
            window.TelegramLoginWidgetCallback = (response) => {
                handleTelegramResponse(response);
            };
        };

        document.getElementById('telegram-login-container').appendChild(script);
    }, [handleTelegramResponse]);

    return (
        <div id="telegram-login-container"></div>
    );
};

export default TelegramLogin;
