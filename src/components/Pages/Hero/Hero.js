import React from 'react';
import { Outlet } from 'react-router-dom';
import HeroStatsCard from './HeroDetails/HeroStatsCard'; // Імпортуємо компонент HeroStatsCard
import { useUserStats } from '../../../context/UserStatsContext'; // Імпортуємо контекст для отримання статистики героя

const Hero = () => {
    const { userStats } = useUserStats(); // Отримуємо дані користувача з контексту
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId) || {}; // Знаходимо поточного героя

    return (
        <div className="hero-page">
            <Outlet /> {/* Тут відображається вміст дочірніх маршрутів */}
            <div className="hero-stats-container">
                <HeroStatsCard stats={currentHero.baseStats} />
            </div>
        </div>
    );
};

export default Hero;
