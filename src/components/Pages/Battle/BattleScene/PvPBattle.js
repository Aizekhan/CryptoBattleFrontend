import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUserStats } from '../../../../context/UserStatsContext';
import heroesConfig from '../../../../context/heroesConfig';
import './PvPBattle.css';
import BattleHeader from './BattleHeader';
import BattleSystem from './BattleSystem'; // Підключаємо BattleSystem
import critIcon from '../../../../assets/icons/critChance.png';
import blockIcon from '../../../../assets/icons/blockChance.png';
import dodgeIcon from '../../../../assets/icons/dodgeChance.png';
import penetrationIcon from '../../../../assets/icons/penetrationChance.png';
import accuracyIcon from '../../../../assets/icons/accuracy.png';

const PvPBattle = () => {
    const { userStats } = useUserStats();
    const location = useLocation();
    const navigate = useNavigate();

    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const bot = heroesConfig.find(hero => hero.id === location.state.opponentId);

    // Викликаємо хуки поза умовним блоком
    const [playerHP, setPlayerHP] = useState(currentHero ? currentHero.baseStats.hp : 0);
    const [botHP, setBotHP] = useState(bot ? bot.baseStats.hp : 0);
    const [damageEffect, setDamageEffect] = useState(null);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (!currentHero || !bot) {
            return;
        }

        const battleSystem = new BattleSystem(currentHero, bot);

        const handleAttack = (attacker, defender, result, battleEnded) => {
            if (attacker.id === currentHero.id) {
                setBotHP(prevHP => Math.max(prevHP - result.damage, 0));
            } else {
                setPlayerHP(prevHP => Math.max(prevHP - result.damage, 0));
            }

            setDamageEffect({ attacker, defender, result });

            // Задати час зникнення ефекту (3 секунди)
            setTimeout(() => {
                setDamageEffect(null);
            }, 3000);

            if (battleEnded) {
                setWinner(attacker.id === currentHero.id ? 'Player' : 'Bot');
                setTimeout(() => {
                    navigate('/battle/sub1');
                }, 5000);
            }
        };

        battleSystem.startBattle(handleAttack);

        return () => battleSystem.endBattle();
    }, [currentHero, bot, navigate]);

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

    if (!currentHero || !bot) {
        return <div>Hero or Bot not found</div>;
    }

    const playerStats = {
        hp: playerHP,
        ...currentHero.baseStats
    };

    const botStats = {
        hp: botHP,
        ...bot.baseStats
    };

    return (
        <div className="pvp-battle">
            <BattleHeader playerStats={playerStats} botStats={botStats} />
            {winner && (
                <div className="winner-announcement">
                    {winner} wins!
                </div>
            )}
            <div className="hero-row">
                <div className="hero-side">
                    <img src={currentHero.img.full} alt={currentHero.name} className="hero-image" />
                    {damageEffect && damageEffect.defender.id === bot.id && (
                        <>
                            <div className="damage-number">{-damageEffect.result.damage.toFixed(2)}</div>
                            {damageEffect.result.effect && (
                                <img src={getEffectIcon(damageEffect.result.effect)} alt={damageEffect.result.effect} className="effect-icon" />
                            )}
                        </>
                    )}
                </div>
                <div className="bot-side">
                    <img src={bot.img.full} alt={bot.name} className="bot-image" />
                    {damageEffect && damageEffect.defender.id === currentHero.id && (
                        <>
                            <div className="damage-number">{-damageEffect.result.damage.toFixed(2)}</div>
                            {damageEffect.result.effect && (
                                <img src={getEffectIcon(damageEffect.result.effect)} alt={damageEffect.result.effect} className="effect-icon" />
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
