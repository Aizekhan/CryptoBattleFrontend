import React, { useState, useEffect } from 'react';
import { useUserStats } from '../../../context/UserStatsContext';
import heroesConfig from '../../../context/heroesConfig';
import './PvPBattle.css';

const PvPBattle = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const botHero = heroesConfig.find(hero => hero.id === 'bot_1_id');

    const [log, setLog] = useState([]);
    const [playerStrategy, setPlayerStrategy] = useState('normal');

    const addLogEntry = (entry) => {
        setLog((prevLog) => {
            const newLog = [...prevLog, entry];
            return newLog.slice(-5); // Зберігаємо тільки останні п'ять записів
        });
    };

    const handleStrategyChange = (strategy) => {
        setPlayerStrategy(strategy);
        addLogEntry(`Player changed strategy to ${strategy}.`);
    };

    const calculateDamage = (attacker, defender, strategy) => {
        let damage = attacker.baseStats.damage;
        let armor = defender.baseStats.armor;
        let crit = Math.random() < (attacker.baseStats.critChance / 100);
        if (crit) {
            damage *= (attacker.baseStats.critPower / 100);
        }

        if (strategy === 'aggressive') {
            damage *= 1.2;
            armor *= 0.8;
        } else if (strategy === 'defensive') {
            damage *= 0.8;
            armor *= 1.2;
        }

        return {
            damage: Math.max(0, damage - armor),
            crit
        };
    };

    useEffect(() => {
        const battleInterval = setInterval(() => {
            const playerAttack = calculateDamage(currentHero, botHero, playerStrategy);
            const botAttack = calculateDamage(botHero, currentHero, 'normal');

            botHero.baseStats.hp -= playerAttack.damage;
            currentHero.baseStats.hp -= botAttack.damage;

            addLogEntry(`Player hits Bot for ${playerAttack.damage.toFixed(2)} damage. ${playerAttack.crit ? 'Critical hit!' : ''}`);
            addLogEntry(`Bot hits Player for ${botAttack.damage.toFixed(2)} damage. ${botAttack.crit ? 'Critical hit!' : ''}`);

            if (botHero.baseStats.hp <= 0 || currentHero.baseStats.hp <= 0) {
                clearInterval(battleInterval);
                addLogEntry(
                    botHero.baseStats.hp <= 0 ? 'Player wins!' : 'Bot wins!'
                );
            }
        }, 3000);

        return () => clearInterval(battleInterval);
    }, [currentHero, botHero, playerStrategy]);

    return (
        <div>
            <div className="battle-container">
                <div className="hero-container">
                    <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
                    <div className="hero-stats">
                        <p>HP: {currentHero.baseStats.hp}</p>
                        <p>Armor: {currentHero.baseStats.armor}</p>
                        <p>Damage: {currentHero.baseStats.damage}</p>
                    </div>
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
            <div className="battle-log">
                {log.map((entry, index) => (
                    <p key={index}>{entry}</p>
                ))}
            </div>
            <div className="strategy-buttons">
                <button onClick={() => handleStrategyChange('normal')}>Normal</button>
                <button onClick={() => handleStrategyChange('aggressive')}>Aggressive</button>
                <button onClick={() => handleStrategyChange('defensive')}>Defensive</button>
            </div>
        </div>
    );
};

export default PvPBattle;
