import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useUserStats } from '../../../context/UserStatsContext';
import heroesConfig from '../../../context/heroesConfig';
import './PvPBattle.css';
import critIcon from '../../../assets/icons/crit.png';
import blockIcon from '../../../assets/icons/block.png';
import dodgeIcon from '../../../assets/icons/dodge.png';
import penetrationIcon from '../../../assets/icons/penetration.png';
import accuracyIcon from '../../../assets/icons/accuracy.png';

const PvPBattle = () => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const location = useLocation();
    const opponentId = location.state?.opponentId || heroesConfig[2].id;
    const bot = heroesConfig.find(hero => hero.id === opponentId);

    const [playerHP, setPlayerHP] = useState(currentHero.baseStats.hp);
    const [botHP, setBotHP] = useState(bot.baseStats.hp);
    const [damageEffect, setDamageEffect] = useState(null);

    const calculateDamage = (attacker, defender) => {
        let damage = attacker.baseStats.damage;
        let isCritical = Math.random() < attacker.baseStats.critChance / 100;
        let isBlocked = Math.random() < defender.baseStats.blockChance / 100;
        let isDodge = Math.random() < defender.baseStats.dodgeChance / 100;
        let isPenetration = false;
        let isAccuracy = false;

        if (isDodge) {
            if (Math.random() < attacker.baseStats.accuracy / 100) {
                isAccuracy = true;
                isDodge = false;
            } else {
                return { damage: 0, effect: 'dodge' };
            }
        }

        if (isBlocked) {
            if (Math.random() < attacker.baseStats.penetrationChance / 100) {
                isPenetration = true;
                isBlocked = false;
            } else {
                damage *= 0.5;
                return { damage, effect: 'block' };
            }
        }

        if (isCritical) {
            damage *= 1.5;
            return { damage, effect: 'crit' };
        }

        return { damage, effect: isPenetration ? 'penetration' : isAccuracy ? 'accuracy' : null };
    };

    const handleAttack = useCallback((attacker, defender, setDefenderHP, isPlayerAttacking) => {
        const { damage, effect } = calculateDamage(attacker, defender);

        setDefenderHP(prevHP => Math.max(prevHP - damage, 0));
        setDamageEffect({ isPlayerAttacking, damage, effect });
    }, []);

    useEffect(() => {
        if (playerHP <= 0 || botHP <= 0) return;

        const timer = setTimeout(() => {
            handleAttack(currentHero, bot, setBotHP, true);
            setTimeout(() => handleAttack(bot, currentHero, setPlayerHP, false), 1500);
        }, 3000);

        return () => clearTimeout(timer);
    }, [playerHP, botHP, bot, currentHero, handleAttack]);

    return (
        <div className="pvp-battle">
            <div className="hero-row">
                <div className="hero-side">
                    <div className="hp">HP: {playerHP.toFixed(2)}</div>
                    <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
                    {damageEffect && damageEffect.isPlayerAttacking && (
                        <div className="damage-effects">
                            <div className="damage-number">{-damageEffect.damage.toFixed(2)}</div>
                            {damageEffect.effect && (
                                <img src={getEffectIcon(damageEffect.effect)} alt={damageEffect.effect} className="effect-icon" />
                            )}
                        </div>
                    )}
                </div>
                <div className="bot-side">
                    <div className="hp">HP: {botHP.toFixed(2)}</div>
                    <img src={bot.img.full} alt={bot.name} className="bot-image" />
                    {damageEffect && !damageEffect.isPlayerAttacking && (
                        <div className="damage-effects">
                            <div className="damage-number">{-damageEffect.damage.toFixed(2)}</div>
                            {damageEffect.effect && (
                                <img src={getEffectIcon(damageEffect.effect)} alt={damageEffect.effect} className="effect-icon" />
                            )}
                        </div>
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
