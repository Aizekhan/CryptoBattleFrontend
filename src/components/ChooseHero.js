import React, { useState } from 'react';
import heroesConfig from '../context/heroesConfig';
import { useUserStats } from '../context/UserStatsContext';
import saveUserProgress from '../context/saveUserProgress';

const ChooseHero = () => {
    const { updateUserStats } = useUserStats();
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

    const currentHero = heroesConfig[currentHeroIndex];

    const handleNextHero = () => {
        setCurrentHeroIndex((currentHeroIndex + 1) % heroesConfig.length);
    };

    const handlePreviousHero = () => {
        setCurrentHeroIndex((currentHeroIndex - 1 + heroesConfig.length) % heroesConfig.length);
    };

    const handleChooseHero = () => {
        const newUserData = {
            username: 'New Player',
            level: 0,
            experience: 0,
            balance: 0,
            totalIncomePer8Hours: 0,
            totalTapIncome: 0,
            currentHeroId: currentHero.id,
            heroes: [
                {
                    ...currentHero,
                    passiveSkills: [],
                    equipment: [],
                    battleCards: [],
                    farmSkills: [],
                    townCards: [],
                    locationCards: [],
                    dungeonCards: [],
                    monsterCards: [],
                    minesGoldCards: [],
                    miningSkillsCards: [],
                    activeSkills: []
                }
            ]
        };

        updateUserStats(newUserData);
        saveUserProgress(newUserData);
    };

    return (
        <div className="choose-hero">
            <div className="hero-navigation">
                <button onClick={handlePreviousHero}>Previous</button>
                <div className="hero-display">
                    <img src={currentHero.img.full} alt={currentHero.name} />
                    <h2>{currentHero.name}</h2>
                    <p>Class: {currentHero.class}</p>
                    <p>Race: {currentHero.race}</p>
                    <p>Ideology: {currentHero.ideology}</p>
                </div>
                <button onClick={handleNextHero}>Next</button>
            </div>
            <button onClick={handleChooseHero}>Choose Hero</button>
        </div>
    );
};

export default ChooseHero;
