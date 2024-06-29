import React from 'react';
import { useUserStats } from '../../../context/UserStatsContext';
import heroConfig from '../../../context/heroesConfig';

const HeroDetails = () => {
    const { userStats, updateUserStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId) || {};

    const handleHeroChange = (event) => {
        const newHeroId = parseInt(event.target.value, 10);
        updateUserStats({ currentHeroId: newHeroId });
    };

    return (
        <div>
            <h2>Hero Details</h2>
            <div>
                <label htmlFor="hero-select">Select Hero:</label>
                <select id="hero-select" onChange={handleHeroChange} value={userStats.currentHeroId || ''}>
                    {userStats.heroes.map(hero => (
                        <option key={hero.id} value={hero.id}>{heroConfig[hero.id - 1].name}</option>
                    ))}
                </select>
            </div>
            {currentHero && (
                <div>
                    <h3>{heroConfig[currentHero.id - 1].name}</h3>
                    <img src={heroConfig[currentHero.id - 1].avatar} alt={heroConfig[currentHero.id - 1].name} />
                    <p>Level: {currentHero.level}</p>
                    <p>HP: {heroConfig[currentHero.id - 1].baseStats.hp}</p>
                    <p>Armor: {heroConfig[currentHero.id - 1].baseStats.armor}</p>
                    <p>Damage: {heroConfig[currentHero.id - 1].baseStats.damage}</p>
                    <p>Attack Speed: {heroConfig[currentHero.id - 1].baseStats.attackSpeed}</p>
                    <p>Crit Chance: {heroConfig[currentHero.id - 1].baseStats.critChance}</p>
                    <p>Crit Power: {heroConfig[currentHero.id - 1].baseStats.critPower}</p>
                    <p>Accuracy: {heroConfig[currentHero.id - 1].baseStats.accuracy}</p>
                    <p>Dodge Chance: {heroConfig[currentHero.id - 1].baseStats.dodgeChance}</p>
                    <p>Block Chance: {heroConfig[currentHero.id - 1].baseStats.blockChance}</p>
                    <p>Penetration Chance: {heroConfig[currentHero.id - 1].baseStats.penetrationChance}</p>
                </div>
            )}
        </div>
    );
};

export default HeroDetails;
