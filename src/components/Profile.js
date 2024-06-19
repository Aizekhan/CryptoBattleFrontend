// frontend/src/components/Profile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
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

    return (
        <div>
            <h1>Welcome, {userInfo.username}</h1>
            <p>Email: {userInfo.email}</p>
            <p>Referral Code: {userInfo.referralCode}</p>
            <p>Token: {userInfo.token}</p>
            {/* Інші елементи профілю */}
        </div>
    );
};

export default Profile;