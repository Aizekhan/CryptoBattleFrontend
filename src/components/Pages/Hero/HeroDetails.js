import React from 'react';
import { useUserStats } from '../../../context/UserStatsContext';
import appImages from '../../../context/appImages';
import './HeroDetails.css'; // Додаємо окремий файл стилів для компонента

const HeroDetails = () => {
    const { userStats, updateUserStats } = useUserStats();
    const currentHeroIndex = userStats.heroes.findIndex(hero => hero.id === userStats.currentHeroId);
    const currentHero = userStats.heroes[currentHeroIndex] || {};

    const handleNextHero = () => {
        const nextIndex = (currentHeroIndex + 1) % userStats.heroes.length;
        updateUserStats({ currentHeroId: userStats.heroes[nextIndex].id });
    };

    const handlePreviousHero = () => {
        const prevIndex = (currentHeroIndex - 1 + userStats.heroes.length) % userStats.heroes.length;
        updateUserStats({ currentHeroId: userStats.heroes[prevIndex].id });
    };

    return (
        <div className="hero-details">
            <div className="hero-navigation">
                <img src={appImages.icons.leftArrow} alt="Previous Hero" onClick={handlePreviousHero} className="arrow-icon" />
                {currentHero.img && (
                    <div className="hero-display">
                        <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
                    </div>
                )}
                <img src={appImages.icons.rightArrow} alt="Next Hero" onClick={handleNextHero} className="arrow-icon" />
            </div>
        </div>
    );
};

export default HeroDetails;
