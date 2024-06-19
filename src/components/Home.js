// frontend/src/components/Home.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await axios.get('/api/users/profile', { withCredentials: true });
                setUserInfo(data);
            } catch (error) {
                console.error('Error fetching user data', error);
            }
        };

        fetchUser();
    }, []);

    const handleAddFriends = () => {
        const referralLink = `https://fastidious-zuccutto-1ef5e6.netlify.app/register?ref=${userInfo.username}`;
        navigator.clipboard.writeText(referralLink);
        alert(`Referral link copied to clipboard: ${referralLink}`);
    };

    return (
        <div>
            <h1>Welcome, {userInfo.username}</h1>
            <button onClick={handleAddFriends}>Add Friends</button>
            {/* Додайте тут інший контент вашого головного екрану гри */}
        </div>
    );
};

export default Home;