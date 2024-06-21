import React from 'react';
import pickaxeIcon from '../../assets/images/pickaxe-icon.png';
import { useUserStats } from '../UserStatsContext';
import './MainLayout.css'; // Оновлення стилів, щоб використовувати MainLayout.css

const SecondaryBar = () => {
    const { userStats } = useUserStats();

    return (
        <div className="secondary-bar">
            <div className="income-info">
                <img src={pickaxeIcon} alt="Income" className="income-icon" />
                <span>{userStats.hourlyIncome}</span>
            </div>
        </div>
    );
};

export default SecondaryBar;
