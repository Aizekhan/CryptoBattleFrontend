import React from 'react';
import upgradeIcon from '../../assets/icons/upgrade-icon.png';
import lockIcon from '../../assets/images/lock.png';
import './UpgradeButton.css';
import { useUserStats } from '../../context/UserStatsContext';
import { prerequisitesMet } from './cardUtils';

const UpgradeButton = ({ card, onClose }) => {
    const { userStats, updateUserStats, updateHeroStats } = useUserStats();

    const canUpgrade = prerequisitesMet(userStats, card) && userStats.balance >= card.upgradeCost;

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
                    const updatedMines = userStats.mines.map(c =>
                        c.id === card.id ? { ...c, level: c.level + 1, upgradeCost: newUpgradeCost } : c
                    );
                    updateUserStats({
                        mines: updatedMines
                    });
                    break;

                case 'heroStat':
                case 'equip':
                case 'battleCard':
                case 'farmSkill':
                    const cardType = card.tag;
                    const updatedCards = newHeroStats[cardType].map(c =>
                        c.id === card.id ? { ...c, level: c.level + 1, upgradeCost: newUpgradeCost } : c
                    );
                    newHeroStats[cardType] = updatedCards;
                    updateHeroStats(userStats.currentHeroId, newHeroStats);
                    break;

                default:
                    break;
            }

            newUpgradeCost = Math.floor(card.upgradeCost * card.scaleUpgrade);

            updateUserStats({
                balance: userStats.balance - card.upgradeCost,
                hourlyIncome: newHourlyIncome
            });

            onClose(); // Закриваємо модальне вікно після апгрейду
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
