import React from 'react';
import './UpgradeButton.css';
import { useUserStats } from '../../context/UserStatsContext';

const UpgradeButton = ({ card }) => {
    const { userStats, updateUserStats, updateHeroStats } = useUserStats();

    const prerequisitesMet = card.prerequisites.every(prereq => {
        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
        return prereqCard && prereqCard.level >= prereq.level;
    });

    const hasEnoughBalance = userStats.balance >= card.upgradeCost;
    const canUpgrade = prerequisitesMet && hasEnoughBalance;

    const handleUpgrade = () => {
        if (canUpgrade) {
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
                case 'battleCard':
                case 'farmSkill':
                    if (card.effectType === 'regenSpeed') {
                        newHeroStats.regenSpeed = (newHeroStats.regenSpeed || 0) + card.effectValue;
                    }
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
        }
    };

    return (
        <button
            onClick={handleUpgrade}
            disabled={!canUpgrade}
            className={canUpgrade ? 'upgrade-button' : 'no-balance-button'}
        >
            Cost: {card.upgradeCost}
        </button>
    );
};

export default UpgradeButton;
