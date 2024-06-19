import React from 'react';
import jwt_decode from 'jwt-decode';

const Profile = () => {
    const token = localStorage.getItem('token');
    const user = token ? jwt_decode(token) : null;

    if (!user) {
        return <p>Please log in.</p>;
    }

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <p>Email: {user.email}</p>
            <p>Token: {token}</p>
        </div>
    );
};

export default Profile;