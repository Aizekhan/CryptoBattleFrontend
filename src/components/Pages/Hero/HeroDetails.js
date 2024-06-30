import React from 'react';
import { useUserStats } from '../../../context/UserStatsContext';

const HeroDetails = () => {
    const { userStats, updateUserStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId) || {};

    const handleHeroChange = (event) => {
        const newHeroId = event.target.value;
        updateUserStats({ currentHeroId: newHeroId });
    };

    return (
        <div>
            <h2>Hero Details</h2>
            <div>
                <label htmlFor="hero-select">Select Hero:</label>
                <select id="hero-select" onChange={handleHeroChange} value={userStats.currentHeroId || ''}>
                    {userStats.heroes.map(hero => (
                        <option key={hero.id} value={hero.id}>{hero.name}</option>
                    ))}
                </select>
            </div>
            {currentHero && (
                <div>
                    <h3>{currentHero.name}</h3>
                    <img src={currentHero.img.avatar} alt={currentHero.name} />
                    <p>Level: {currentHero.level}</p>
                    <p>HP: {currentHero.baseStats.hp}</p>
                    <p>Armor: {currentHero.baseStats.armor}</p>
                    <p>Damage: {currentHero.baseStats.damage}</p>
                    <p>Attack Speed: {currentHero.baseStats.attackSpeed}</p>
                    <p>Crit Chance: {currentHero.baseStats.critChance}</p>
                    <p>Crit Power: {currentHero.baseStats.critPower}</p>
                    <p>Accuracy: {currentHero.baseStats.accuracy}</p>
                    <p>Dodge Chance: {currentHero.baseStats.dodgeChance}</p>
                    <p>Block Chance: {currentHero.baseStats.blockChance}</p>
                    <p>Penetration Chance: {currentHero.baseStats.penetrationChance}</p>
                </div>
            )}
        </div>
    );
};

export default HeroDetails;
