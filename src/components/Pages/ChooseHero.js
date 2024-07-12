import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroesConfig from '../../context/heroesConfig';
import { useUserStats } from '../../context/UserStatsContext';

const ChooseHero = () => {
    const navigate = useNavigate();
    const { updateUserStats } = useUserStats();
    const [selectedHeroIndex, setSelectedHeroIndex] = useState(0);

    const handleNextHero = () => {
        setSelectedHeroIndex((selectedHeroIndex + 1) % heroesConfig.length);
    };

    const handlePreviousHero = () => {
        setSelectedHeroIndex((selectedHeroIndex - 1 + heroesConfig.length) % heroesConfig.length);
    };

    const handleChooseHero = () => {
        const selectedHero = heroesConfig[selectedHeroIndex];
        const initialUserProgress = {
            userId: 'user_1_id', // Замість цього значення ви можете використовувати ID, який отримуєте з сервера
            username: 'Player',
            level: 0,
            experience: 0,
            balance: 0,
            totalIncomePer8Hours: 0,
            totalTapIncome: 0,
            currentHeroId: selectedHero.id,
            heroes: [
                {
                    ...selectedHero,
                    level: 0,
                    experience: 0,
                    passiveSkills: selectedHero.defaultCards.passiveSkills.map(id => ({ id, level: 0 })),
                    equipment: selectedHero.defaultCards.equipment.map(id => ({ id, level: 0 })),
                    battleCards: selectedHero.defaultCards.battleCards.map(id => ({ id, level: 0 })),
                    farmSkills: selectedHero.defaultCards.farmSkills.map(id => ({ id, level: 0 })),
                    townCards: selectedHero.defaultCards.townCards.map(id => ({ id, level: 0 })),
                    locationCards: selectedHero.defaultCards.locationCards.map(id => ({ id, level: 0 })),
                    dungeonCards: selectedHero.defaultCards.dungeonCards.map(id => ({ id, level: 0 })),
                    monsterCards: selectedHero.defaultCards.monsterCards.map(id => ({ id, level: 0 })),
                    minesGoldCards: selectedHero.defaultCards.minesGoldCards.map(id => ({ id, level: 0 })),
                    miningSkillsCards: selectedHero.defaultCards.miningSkillsCards.map(id => ({ id, level: 0 })),
                    activeSkills: selectedHero.defaultCards.activeSkills.map(id => ({ id, level: 0 })),
                }
            ]
        };

        updateUserStats(initialUserProgress);
        navigate('/');
    };

    const selectedHero = heroesConfig[selectedHeroIndex];

    return (
        <div className="choose-hero">
            <div className="hero-navigation">
                <button onClick={handlePreviousHero}>Previous</button>
                <div className="hero-display">
                    <img src={selectedHero.img.full} alt={selectedHero.name} />
                    <h2>{selectedHero.name}</h2>
                    <p>{selectedHero.class}</p>
                </div>
                <button onClick={handleNextHero}>Next</button>
            </div>
            <button onClick={handleChooseHero}>Choose</button>
        </div>
    );
};

export default ChooseHero;
