import React from 'react';
import { useUserStats } from '../../../context/UserStatsContext';
import leftArrowIcon from '../../../assets/icons/NavPanel/left-arrow.png';
import rightArrowIcon from '../../../assets/icons/NavPanel/right-arrow.png';
import './HeroDetails.css'; // Додаємо окремий файл стилів для компонента
import heroesConfig from '../../../context/heroesConfig'; // Імпортуємо конфігурацію героїв

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

    const heroConfig = heroesConfig.find(hero => hero.id === currentHero.id) || {};

    return (
        <div className="hero-details">
            <div className="hero-navigation">
                <img src={leftArrowIcon} alt="Previous Hero" onClick={handlePreviousHero} className="arrow-icon" />
                {heroConfig && (
                    <div className="hero-display">
                        <img src={heroConfig.img.full} alt={heroConfig.name} className="hero-image" />
                    </div>
                )}
                <img src={rightArrowIcon} alt="Next Hero" onClick={handleNextHero} className="arrow-icon" />
            </div>
        </div>
    );
};

export default HeroDetails;
