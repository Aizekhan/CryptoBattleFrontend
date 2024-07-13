import axios from 'axios';

const authenticateWithTelegram = async (telegramData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/telegram`, telegramData);
        const { token, user } = response.data;
        localStorage.setItem('authToken', token);
        return user;
    } catch (error) {
        console.error('Error authenticating with Telegram:', error);
        return null;
    }
};

export default authenticateWithTelegram;
