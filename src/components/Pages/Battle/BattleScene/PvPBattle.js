import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStats } from '../../../context/UserStatsContext';
import heroesConfig from '../../../context/heroesConfig';
import './PvPBattle.css';
import BattleHeader from './BattleHeader';
import critIcon from '../../../assets/icons/critChance.png';
import blockIcon from '../../../assets/icons/blockChance.png';
import dodgeIcon from '../../../assets/icons/dodgeChance.png';
import penetrationIcon from '../../../assets/icons/penetrationChance.png';
import accuracyIcon from '../../../assets/icons/accuracy.png';

const PvPBattle = () => {
    const { userStats } = useUserStats();
    const location = useLocation();
    const opponentId = location.state?.opponentId || 2; // Використовуємо переданий ID противника або за замовчуванням 2
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const bot = heroesConfig.find(hero => hero.id === opponentId); // Використовуємо обраного противника

    const [playerHP, setPlayerHP] = useState(currentHero.baseStats.hp);
    const [botHP, setBotHP] = useState(bot.baseStats.hp);
    const [damageEffect, setDamageEffect] = useState(null);
    const [winner, setWinner] = useState(null);
    const navigate = useNavigate();

    const playerStats = {
        hp: playerHP,
        ...currentHero.baseStats
    };

    const botStats = {
        hp: botHP,
        ...bot.baseStats
    };

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

    const handleAttack = useCallback((attacker, defender, setDefenderHP, isPlayerAttacking) => {
        const { damage, effect } = calculateDamage(attacker, defender);

        setDefenderHP(prevHP => Math.max(prevHP - damage, 0));
        setDamageEffect({ isPlayerAttacking, damage, effect });
    }, []);

    useEffect(() => {
        if (playerHP <= 0) {
            setWinner('Bot');
            setTimeout(() => {
                navigate('/battle/sub1');
      
