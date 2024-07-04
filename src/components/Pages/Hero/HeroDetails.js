import React from 'react';
import { useUserStats } from '../../../context/UserStatsContext';
import leftArrowIcon from '../../../assets/icons/NavPanel/left-arrow.png';
import rightArrowIcon from '../../../assets/icons/NavPanel/right-arrow.png';
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
            <h2>Hero Details</h2>
            <div className="hero-navigation">
                <img src={leftArrowIcon} alt="Previous Hero" onClick={handlePreviousHero} className="arrow-icon" />
                {currentHero && (
                    <div className="hero-display">
                        <h3>{currentHero.name}</h3>
                        <img src={currentHero.img.avatar} alt={currentHero.name} className="hero-image" />
                    </div>
                )}
                <img src={rightArrowIcon} alt="Next Hero" onClick={handleNextHero} className="arrow-icon" />
            </div>
        </div>
    );
};

export default HeroDetails;
