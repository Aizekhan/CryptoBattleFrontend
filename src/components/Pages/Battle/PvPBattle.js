// PvPBattle.js

import React, { useState, useEffect } from 'react';
import { useUserStats } from '../../../context/UserStatsContext';
import heroesConfig from '../../../context/heroesConfig';
import './PvPBattle.css';
import critIcon from '../../../assets/icons/crit.png'; // Додайте відповідні іконки
import blockIcon from '../../../assets/icons/block.png';
import dodgeIcon from '../../../assets/icons/dodge.png';
import penetrationIcon from '../../../assets/icons/penetration.png';
import accuracyIcon from '../../../assets/icons/accuracy.png';

const PvPBattle = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const bot = heroesConfig[1]; // Використовуємо другого героя як бота

    const [battleLog, setBattleLog] = useState([]);
    const [playerHP, setPlayerHP] = useState(currentHero.baseStats.hp);
    const [botHP, setBotHP] = useState(bot.baseStats.hp);
    const [damageEffect, setDamageEffect] = useState(null);

    const calculateDamage = (attacker, defender, strategy) => {
        let damage = attacker.baseStats.damage;
        let isCritical = Math.random() < attacker.baseStats.critChance / 100;
        let isBlocked = Math.random() < defender.baseStats.blockChance / 100;
        let isDodge = Math.random() < defender.baseStats.dodgeChance / 100;

        if (isDodge) {
            return { damage: 0, effect: 'dodge' };
        }

        if (isBlocked) {
            damage *= 0.5;
            return { damage, effect: 'block' };
        }

        if (isCritical) {
            damage *= 1.5;
            return { damage, effect: 'crit' };
        }

        return { damage, effect: null };
    };

    const handleAttack = (attacker, defender, setDefenderHP, isPlayerAttacking) => {
        const { damage, effect } = calculateDamage(attacker, defender);

        setDefenderHP(prevHP => Math.max(prevHP - damage, 0));
        setDamageEffect({ isPlayerAttacking, damage, effect });
        setBattleLog(prevLog => [
            ...prevLog.slice(-1), // Оновлюємо тільки останній запис логу
            { attacker: attacker.name, damage, effect }
        ]);
    };

    useEffect(() => {
        if (playerHP <= 0 || botHP <= 0) return;

        const timer = setTimeout(() => {
            handleAttack(currentHero, bot, setBotHP, true);
            setTimeout(() => handleAttack(bot, currentHero, setPlayerHP, false), 1500);
        }, 3000);

        return () => clearTimeout(timer);
    }, [playerHP, botHP]);

    return (
        <div className="pvp-battle">
            <div className="player-side">
                <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
                <div className="stats">
                    <p>HP: {playerHP.toFixed(2)}</p>
                    <p>Armor: {currentHero.baseStats.armor}</p>
                    <p>Damage: {currentHero.baseStats.damage}</p>
                </div>
                <div className="hero-effects">
                    {damageEffect && damageEffect.isPlayerAttacking && (
                        <>
                            <div className="damage-number">{-damageEffect.damage.toFixed(2)}</div>
                            {damageEffect.effect && (
                                <img src={getEffectIcon(damageEffect.effect)} alt={damageEffect.effect} className="effect-icon" />
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="bot-side">
                <img src={bot.img.full} alt={bot.name} className="bot-image" />
                <div className="stats">
                    <p>HP: {botHP.toFixed(2)}</p>
                    <p>Armor: {bot.baseStats.armor}</p>
                    <p>Damage: {bot.baseStats.damage}</p>
                </div>
                <div className="bot-effects">
                    {damageEffect && !damageEffect.isPlayerAttacking && (
                        <>
                            <div className="damage-number">{-damageEffect.damage.toFixed(2)}</div>
                            {damageEffect.effect && (
                                <img src={getEffectIcon(damageEffect.effect)} alt={damageEffect.effect} className="effect-icon" />
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="tactics">
                <button>Normal</button>
                <button>Aggressive</button>
                <button>Defensive</button>
            </div>
        </div>
    );
};

const getEffectIcon = (effect) => {
    switch (effect) {
        case 'crit':
            return critIcon;
        case 'block':
            return blockIcon;
        case 'dodge':
            return dodgeIcon;
        case 'penetration':
            return penetrationIcon;
        case 'accuracy':
            return accuracyIcon;
        default:
            return null;
    }
};

export default PvPBattle;
