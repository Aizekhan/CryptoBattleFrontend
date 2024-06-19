// frontend/src/components/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;