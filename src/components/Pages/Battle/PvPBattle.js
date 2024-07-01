import React, { useState, useEffect, useCallback } from 'react';
import { useUserStats } from '../../../context/UserStatsContext';
import heroesConfig from '../../../context/heroesConfig';
import './PvPBattle.css';

const PvPBattle = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const botHero = heroesConfig.find(hero => hero.id === 'bot_1_id');

    const [log, setLog] = useState([]);
    const [playerStrategy, setPlayerStrategy] = useState('normal');
    const [playerHP, setPlayerHP] = useState(currentHero.baseStats.hp);
    const [botHP, setBotHP] = useState(botHero.baseStats.hp);

    const addLogEntry = (entry) => {
        setLog(prevLog => [entry, ...prevLog.slice(0, 1)]); // Зберігаємо тільки останні два записи
    };

    const handleStrategyChange = (strategy) => {
        setPlayerStrategy(strategy);
        addLogEntry(`Player changed strategy to ${strategy}.`);
    };

    const calculateDamage = (attacker, defender, strategy) => {
        let damage = attacker.baseStats.damage;
        let armor = defender.baseStats.armor;
        let crit = Math.random() < (attacker.baseStats.critChance / 100);
        let critMultiplier = crit ? attacker.baseStats.critPower / 100 : 1;

        if (strategy === 'aggressive') {
            damage *= 1.2;
        } else if (strategy === 'defensive') {
            damage *= 0.8;
        }

        let actualDamage = (damage * critMultiplier) - armor;
        actualDamage = Math.max(actualDamage, 0); // Ensure damage is not negative

        return { actualDamage, crit };
    };

    const battleTurn = useCallback(() => {
        // Player attacks Bot
        const { actualDamage: playerDamage, crit: playerCrit } = calculateDamage(currentHero, botHero, playerStrategy);
        setBotHP(prevHP => prevHP - playerDamage);
        addLogEntry(`Player hits Bot for ${playerDamage.toFixed(2)} damage${playerCrit ? '. Critical hit!' : '.'}`);

        // Bot attacks Player
        const { actualDamage: botDamage, crit: botCrit } = calculateDamage(botHero, currentHero, 'normal');
        setPlayerHP(prevHP => prevHP - botDamage);
        addLogEntry(`Bot hits Player for ${botDamage.toFixed(2)} damage${botCrit ? '. Critical hit!' : '.'}`);
    }, [currentHero, botHero, playerStrategy]);

    useEffect(() => {
        if (playerHP > 0 && botHP > 0) {
            const timer = setInterval(battleTurn, 3000);
            return () => clearInterval(timer);
        }
    }, [playerHP, botHP, battleTurn]);

    return (
        <div className="battle-container">
            <div className="hero-row">
                <div className="hero-container">
                    <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
                    <div className="hero-stats">
                        <p>HP: {playerHP.toFixed(2)}</p>
                        <p>Armor: {currentHero.baseStats.armor}</p>
                        <p>Damage: {currentHero.baseStats.damage}</p>
                    </div>
                </div>
                <div className="hero-container">
                    <img src={botHero.img.full} alt={botHero.name} className="hero-image" />
                    <div className="hero-stats">
                        <p>HP: {botHP.toFixed(2)}</p>
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
