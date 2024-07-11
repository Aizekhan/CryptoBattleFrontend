import React from 'react';
import upgradeIcon from '../../assets/icons/upgrade-icon.png';
import lockIcon from '../../assets/images/lock.png';
import './UpgradeButton.css';
import { useUserStats } from '../../context/UserStatsContext';
import { prerequisitesMet } from './cardUtils';

const UpgradeButton = ({ card, onClose }) => {
    const { userStats, updateUserStats, updateHeroStats, updateHeroPassiveSkills, updateHeroEquipment, updateHeroBattleCards, updateHeroFarmSkills, updateHeroTownCards, updateHeroLocationCards, updateHeroDungeonCards, updateHeroMonsterCards, updateHeroMinesGoldCards, updateHeroMiningSkillsCards, updateHeroHeroFarmSkillsCards, updateHeroHeroBattleCards, updateHeroHeroPassiveSkillsCards, updateHeroHeroEquipmentCards, updateHeroActiveSkills } = useUserStats();

    const canUpgrade = prerequisitesMet(userStats, card) && userStats.balance >= card.upgradeCost;

    const handleUpgrade = () => {
        if (canUpgrade) {
            console.log('Upgrading card:', card);

            let newHourlyIncome = userStats.hourlyIncome;
            let newUpgradeCost = card.upgradeCost;
            let newHeroStats = { ...userStats.heroes.find(hero => hero.id === userStats.currentHeroId) };

            const updateHeroCards = (cardType, newCards) => {
                switch (cardType) {
                    case 'passiveSkills':
                        updateHeroPassiveSkills(userStats.currentHeroId, newCards);
                        break;
                    case 'equipment':
                        updateHeroEquipment(userStats.currentHeroId, newCards);
                        break;
                    case 'battleCards':
                        updateHeroBattleCards(userStats.currentHeroId, newCards);
                        break;
                    case 'farmSkills':
                        updateHeroFarmSkills(userStats.currentHeroId, newCards);
                        break;
                    case 'townCards':
                        updateHeroTownCards(userStats.currentHeroId, newCards);
                        break;
                    case 'locationCards':
                        updateHeroLocationCards(userStats.currentHeroId, newCards);
                        break;
                    case 'dungeonCards':
                        updateHeroDungeonCards(userStats.currentHeroId, newCards);
                        break;
                    case 'monsterCards':
                        updateHeroMonsterCards(userStats.currentHeroId, newCards);
                        break;
                    case 'minesGoldCards':
                        updateHeroMinesGoldCards(userStats.currentHeroId, newCards);
                        break;
                    case 'miningSkillsCards':
                        updateHeroMiningSkillsCards(userStats.currentHeroId, newCards);
                        break;
                    case 'heroFarmSkillsCards':
                        updateHeroHeroFarmSkillsCards(userStats.currentHeroId, newCards);
                        break;
                    case 'heroBattleCards':
                        updateHeroHeroBattleCards(userStats.currentHeroId, newCards);
                        break;
                    case 'heroPassiveSkillsCards':
                        updateHeroHeroPassiveSkillsCards(userStats.currentHeroId, newCards);
                        break;
                    case 'heroEquipmentCards':
                        updateHeroHeroEquipmentCards(userStats.currentHeroId, newCards);
                        break;
                    case 'activeSkills':
                        updateHeroActiveSkills(userStats.currentHeroId, newCards);
                        break;
                    default:
                        break;
                }
            };

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

                default:
                    const cardType = card.tag;
                    const updatedCards = newHeroStats[cardType].map(c =>
                        c.id === card.id ? { ...c, level: c.level + 1, upgradeCost: newUpgradeCost } : c
                    );
                    updateHeroCards(cardType, updatedCards);
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
