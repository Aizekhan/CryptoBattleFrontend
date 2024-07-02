import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStats } from '../../../context/UserStatsContext';
import heroesConfig from '../../../context/heroesConfig';
import './PvPBattle.css';
import BattleHeader from './BattleHeader';
import critIcon from '../../../assets/icons/crit.png';
import blockIcon from '../../../assets/icons/block.png';
import dodgeIcon from '../../../assets/icons/dodge.png';
import penetrationIcon from '../../../assets/icons/penetration.png';
import accuracyIcon from '../../../assets/icons/accuracy.png';

const PvPBattle = () => {
    const { userStats } = useUserStats();
    const location = useLocation();
    const opponentId = location.state.opponentId;
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const bot = heroesConfig.find(hero => hero.id === opponentId);

    const [playerHP, setPlayerHP] = useState(currentHero.baseStats.hp);
    const [botHP, setBotHP] = useState(bot.baseStats.hp);
    const [playerDamageEffect, setPlayerDamageEffect] = useState(null);
    const [botDamageEffect, setBotDamageEffect] = useState(null);
    const [winner, setWinner] = useState(null);
    const navigate = useNavigate();

    const calculateDamage = (attacker, defender) => {
        let damage = attacker.baseStats.damage;
        let isCritical = Math.random() < attacker.baseStats.critChance / 100;
        let isBlocked = Math.random() < defender.baseStats.blockChance / 100;
        let isDodge = Math.random() < defender.baseStats.dodgeChance / 100;
        let isPenetrated = Math.random() < attacker.baseStats.penetrationChance / 100;
        let isAccurate = Math.random() < attacker.baseStats.accuracyChance / 100;

        if (isDodge && !isAccurate) {
            return { damage: 0, effect: 'dodge' };
        }

        if (isBlocked && !isPenetrated) {
            damage *= 0.5;
            return { damage, effect: 'block' };
        }

        if (isCritical) {
            damage *= 1.5;
            return { damage, effect: 'crit' };
        }

        if (isPenetrated) {
            return { damage, effect: 'penetration' };
        }

        if (isAccurate) {
            return { damage, effect: 'accuracy' };
        }

        return { damage, effect: null };
    };

    const handleAttack = useCallback((attacker, defender, setDefenderHP, setDamageEffect, isPlayerAttacking) => {
        const { damage, effect } = calculateDamage(attacker, defender);

        setDefenderHP(prevHP => Math.max(prevHP - damage, 0));
        setDamageEffect({ isPlayerAttacking, damage, effect });
    }, []);

    useEffect(() => {
        const playerAttackInterval = 3000 / currentHero.baseStats.attackSpeed;
        const botAttackInterval = 3000 / bot.baseStats.attackSpeed;

        const playerTimer = setInterval(() => {
            handleAttack(currentHero, bot, setBotHP, setPlayerDamageEffect, true);
        }, playerAttackInterval);

        const botTimer = setInterval(() => {
            handleAttack(bot, currentHero, setPlayerHP, setBotDamageEffect, false);
        }, botAttackInterval);

        return () => {
            clearInterval(playerTimer);
            clearInterval(botTimer);
        };
    }, [playerHP, botHP, bot, currentHero, handleAttack, navigate]);

    useEffect(() => {
        if (playerHP <= 0) {
            setWinner('Bot');
            setTimeout(() => {
                navigate('/battle/sub1');
            }, 5000);
        }

        if (botHP <= 0) {
            setWinner('Player');
            setTimeout(() => {
                navigate('/battle/sub1');
            }, 5000);
        }
    }, [playerHP, botHP, navigate]);

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

    return (
        <div className="pvp-battle no-scroll">
            <BattleHeader playerHP={playerHP} botHP={botHP} playerName={currentHero.name} botName={bot.name} />
            {winner && (
                <div className="winner-announcement">
                    {winner} wins!
                </div>
            )}
            <div className="hero-row">
                <div className="hero-side">
                    <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
                    {botDamageEffect && (
                        <>
                            <div className="damage-number">{-botDamageEffect.damage.toFixed(2)}</div>
                            {botDamageEffect.effect && (
                                <img src={getEffectIcon(botDamageEffect.effect)} alt={botDamageEffect.effect} className="effect-icon" />
                            )}
                        </>
                    )}
                </div>
                <div className="bot-side">
                    <img src={bot.img.full} alt={bot.name} className="bot-image" />
                    {playerDamageEffect && (
                        <>
                            <div className="damage-number">{-playerDamageEffect.damage.toFixed(2)}</div>
                            {playerDamageEffect.effect && (
                                <img src={getEffectIcon(playerDamageEffect.effect)} alt={playerDamageEffect.effect} className="effect-icon" />
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="battle-controls">
                <button>Normal</button>
                <button>Aggressive</button>
                <button>Defensive</button>
            </div>
        </div>
    );
};

export default PvPBattle;
