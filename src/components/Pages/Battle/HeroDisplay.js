// HeroDisplay.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStats } from '../../../context/UserStatsContext';
import heroesConfig from '../../../context/heroesConfig';
import './HeroDisplay.css';

const HeroDisplay = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const [selectedOpponent, setSelectedOpponent] = useState(heroesConfig[1].id); // Початковий противник
    const navigate = useNavigate();

    const handleSearchBattle = () => {
        navigate('/battle/pvp-battle', { state: { opponentId: selectedOpponent } });
    };

    const handleChangeOpponent = (event) => {
        setSelectedOpponent(parseInt(event.target.value));
    };

    return (
        <div className="hero-display">
            <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
            <div className="stats">
                <p>HP: {currentHero.baseStats.hp}</p>
                <p>Armor: {currentHero.baseStats.armor}</p>
                <p>Damage: {currentHero.baseStats.damage}</p>
            </div>
            <div className="opponent-selection">
                <label htmlFor="opponent-select">Виберіть противника: </label>
                <select id="opponent-select" value={selectedOpponent} onChange={handleChangeOpponent}>
                    {heroesConfig.map(hero => (
                        <option key={hero.id} value={hero.id}>{hero.name}</option>
                    ))}
                </select>
            </div>
            <button onClick={handleSearchBattle}>Пошук битви</button>
        </div>
    );
};

export default HeroDisplay;
