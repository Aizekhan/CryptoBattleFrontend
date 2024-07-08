import React from 'react';
import lockIcon from '../../assets/images/lock.png';
import upgradeIcon from '../../assets/icons/upgrade-icon.png';
import { useUserStats } from '../../context/UserStatsContext';
import './UpgradeButton.css';

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

                // Інші випадки...

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

            console.log('Updated user stats:', {
                balance: userStats.balance - card.upgradeCost,
                hourlyIncome: newHourlyIncome,
                mines: updatedMines,
                heroes: updatedHeroes
            });
        }
    };

    let buttonContent = (
        <img src={lockIcon} alt="Locked" className="lock-icon" />
    );
    let buttonClass = 'locked';

    if (prerequisitesMet) {
        buttonContent = (
            <img src={upgradeIcon} alt="Upgrade" className="upgrade-icon" />
        );
        buttonClass = hasEnoughBalance ? 'can-upgrade' : 'no-balance';
    }

    return (
        <button
            onClick={handleUpgrade}
            disabled={!canUpgrade}
            className={buttonClass}
        >
            {buttonContent}
        </button>
    );
};

export default UpgradeButton;
