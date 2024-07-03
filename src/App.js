import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import jwt_decode from 'jwt-decode';
import MainLayout from './components/Panels/MainLayout';
import './App.css';
import { useUserStats, UserStatsProvider } from './context/UserStatsContext';
import Login from './components/Login';



function App() {
    const { updateUserStats } = useUserStats();

    useEffect(() => {
    //    const urlParams = new URLSearchParams(window.location.search);
     //   const token = urlParams.get('token') || localStorage.getItem('authToken');
      //  if (token) {
        //    const decoded = jwt_decode(token);
         //   updateUserStats({
           //     username: decoded.username
       //     });
//
     //       localStorage.setItem('authToken', token);
//
       //     axios
          //      .get(`${process.env.REACT_APP_BACKEND_URL}/api/user/${decoded.id}`, {
          //          headers: {
           //             Authorization: `Bearer ${token}`,
             //           "Content-Type": 'application/json',
             //           "Access-Control-Allow-Origin": "*"
       //             },
        //        })
         //       .then((response) => {
           //         updateUserStats({
             //           username: response.data.username,
              //          level: response.data.level,
               //         tapIncome: response.data.tapIncome,
               //         hourlyIncome: response.data.hourlyIncome,
                 //       balance: response.data.balance,
                 //       mines: response.data.mines,
            //            heroes: response.data.heroes,
         //               currentHeroId: response.data.currentHeroId
        //            });
        //        })
        //        .catch((error) => {
        //            console.error('Error fetching user data:', error);
    //            });
   //     } else {
     //       console.error('Decoded token does not contain user ID');
     //   }
    }, [updateUserStats]);

   return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={localStorage.getItem('authToken') ? <MainLayout /> : <Login />} />
            </Routes>
        </Router>
    );
}

export default function AppWrapper() {
    return (
        <UserStatsProvider>
            <App />
        </UserStatsProvider>
    );
}
