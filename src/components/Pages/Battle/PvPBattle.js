import React, { useState, useEffect } from 'react';
import { useUserStats } from '../../../context/UserStatsContext';
import heroesConfig from '../../../context/heroesConfig';
import './PvPBattle.css';

const PvPBattle = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const botHero = heroesConfig.find(hero => hero.id === 'bot_1_id');

    const [log, setLog] = useState([]);
    const [playerStrategy, setPlayerStrategy] = useState('normal'); // Додаємо стан для стратегії гравця
    const [botStrategy, setBotStrategy] = useState('normal'); // Додаємо стан для стратегії бота

    const addLogEntry = (entry) => {
        setLog((prevLog) => [...prevLog, entry]);
    };

    const handleStrategyChange = (strategy) => {
        setPlayerStrategy(strategy);
        addLogEntry(`Player changed strategy to ${strategy}.`);
    };

    const calculateDamage = (attacker, defender, strategy) => {
        let damage = attacker.baseStats.damage;
        let armor = defender.baseStats.armor;

        if (strategy === 'aggressive') {
            damage *= 1.2;
            armor *= 0.8;
        } else if (strategy === 'defensive') {
            damage *= 0.8;
            armor *= 1.2;
        }

        return Math.max(0, damage - armor);
    };

    useEffect(() => {
        const battleInterval = setInterval(() => {
            // Обчислення бою
            const playerDamage = calculateDamage(currentHero, botHero, playerStrategy);
            const botDamage = calculateDamage(botHero, currentHero, botStrategy);

            botHero.baseStats.hp -= playerDamage;
            currentHero.baseStats.hp -= botDamage;

            addLogEntry(`Player hits Bot for ${playerDamage} damage.`);
            addLogEntry(`Bot hits Player for ${botDamage} damage.`);

            if (botHero.baseStats.hp <= 0 || currentHero.baseStats.hp <= 0) {
                clearInterval(battleInterval);
                addLogEntry(botHero.baseStats.hp <= 0 ? 'Player wins!' : 'Bot wins!');
            }
        }, 3000);

        return () => clearInterval(battleInterval);
    }, [currentHero, botHero, playerStrategy, botStrategy]);

    return (
        <div className="battle-container">
            <div className="hero-container">
                <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
                <div className="hero-stats">
                    <p>HP: {currentHero.baseStats.hp}</p>
                    <p>Armor: {currentHero.baseStats.armor}</p>
                    <p>Damage: {currentHero.baseStats.damage}</p>
                    <div className="strategy-buttons">
                        <button onClick={() => handleStrategyChange('normal')}>Normal</button>
                        <button onClick={() => handleStrategyChange('aggressive')}>Aggressive</button>
                        <button onClick={() => handleStrategyChange('defensive')}>Defensive</button>
                    </div>
                </div>
            </div>
            <div className="log-container">
                {log.map((entry, index) => (
                    <p key={index}>{entry}</p>
                ))}
            </div>
            <div className="hero-container">
                <img src={botHero.img.full} alt={botHero.name} className="hero-image" />
                <div className="hero-stats">
                    <p>HP: {botHero.baseStats.hp}</p>
                    <p>Armor: {botHero.baseStats.armor}</p>
                    <p>Damage: {botHero.baseStats.damage}</p>
                </div>
            </div>
        </div>
    );
};

export default PvPBattle;
