import React from 'react';
import upgradeIcon from '../../assets/icons/upgrade-icon.png'; // Імпортуємо іконку апгрейду
import lockIcon from '../../assets/images/lock.png'; // Імпортуємо іконку замка
import './UpgradeButton.css';
import { useUserStats } from '../../context/UserStatsContext';

const UpgradeButton = ({ card, onUpgrade }) => {
    const { userStats, updateUserStats, updateHeroStats } = useUserStats();

    const prerequisitesMet = card.prerequisites.every(prereq => {
        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
        return prereqCard && prereqCard.level >= prereq.level;
    });

    const hasEnoughBalance = userStats.balance >= card.upgradeCost;
    const canUpgrade = prerequisitesMet && hasEnoughBalance;

    const handleUpgrade = () => {
        if (canUpgrade) {
            console.log('Upgrading card:', card);

            let newHourlyIncome = userStats.hourlyIncome;
            let newUpgradeCost = card.upgradeCost;
            let newHeroStats = { ...userStats.heroes.find(hero => hero.id === userStats.currentHeroId) };

            switch (card.tag) {
                case 'goldMine':
                    const currentLevel = userStats.mines.find(c => c.id === card.id).level;
                    newHourlyIncome += card.baseIncome * Math.pow(card.scaleIncome, currentLevel + 1);
                    break;

                case 'heroStat':
                    newHeroStats[card.effectType] += card.effectValue;
                    updateHeroStats(userStats.currentHeroId, newHeroStats);
                    break;

                case 'equip':
                    break;

                case 'battleCard':
                    break;

                case 'farmSkill':
                    if (card.effectType === 'regenSpeed') {
                        newHeroStats.regenSpeed = (newHeroStats.regenSpeed || 0) + card.effectValue;
                    }
                    break;

                case 'market':
                    break;

                case 'location':
                    break;

                default:
                    break;
            }

            newUpgradeCost = Math.floor(card.upgradeCost * card.scaleUpgrade);

            const updatedMines = userStats.mines.map(c =>
                c.id === card.id ? { ...c, level: c.level + 1, upgradeCost: newUpgradeCost } : c
            );

            const updatedHeroes = userStats.heroes.map(hero =>
                hero.id === userStats.currentHeroId ? newHeroStats : hero
            );

            updateUserStats({
                balance: userStats.balance - card.upgradeCost,
                hourlyIncome: newHourlyIncome,
                mines: updatedMines,
                heroes: updatedHeroes
            });

            onUpgrade(); // Викликаємо колбек для закриття модального вікна
        }
    };

    return (
        <button
            onClick={handleUpgrade}
            disabled={!canUpgrade}
            className={canUpgrade ? 'upgrade-button' : 'no-balance-button'}
        >
            <img src={canUpgrade ? upgradeIcon : lockIcon} alt="Upgrade" />
            <span>Cost: {card.upgradeCost}</span>
        </button>
    );
};

export default UpgradeButton;
