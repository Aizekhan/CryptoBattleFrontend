import React from 'react';
import upgradeIcon from '../../assets/icons/upgrade-icon.png';
import lockIcon from '../../assets/images/lock.png';
import './UpgradeButton.css';
import { useUserStats } from '../../context/UserStatsContext';
import { prerequisitesMet, getCardListByTag } from './cardUtils';

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
                    case 'heroStat':
                        updateHeroPassiveSkills(userStats.currentHeroId, newCards);
                        break;
                    case 'equip':
                        updateHeroEquipment(userStats.currentHeroId, newCards);
                        break;
                    case 'battleCard':
                        updateHeroBattleCards(userStats.currentHeroId, newCards);
                        break;
                    case 'farmSkill':
                        updateHeroFarmSkills(userStats.currentHeroId, newCards);
                        break;
                    case 'town':
                        updateHeroTownCards(userStats.currentHeroId, newCards);
                        break;
                    case 'location':
                        updateHeroLocationCards(userStats.currentHeroId, newCards);
                        break;
                    case 'dungeon':
                        updateHeroDungeonCards(userStats.currentHeroId, newCards);
                        break;
                    case 'monster':
                        updateHeroMonsterCards(userStats.currentHeroId, newCards);
                        break;
                    case 'goldMine':
                        updateHeroMinesGoldCards(userStats.currentHeroId, newCards);
                        break;
                    case 'miningSkill':
                        updateHeroMiningSkillsCards(userStats.currentHeroId, newCards);
                        break;
                    case 'heroFarmSkill':
                        updateHeroHeroFarmSkillsCards(userStats.currentHeroId, newCards);
                        break;
                    case 'heroBattleCard':
                        updateHeroHeroBattleCards(userStats.currentHeroId, newCards);
                        break;
                    case 'heroPassiveSkills':
                        updateHeroHeroPassiveSkillsCards(userStats.currentHeroId, newCards);
                        break;
                    case 'heroEquipment':
                        updateHeroHeroEquipmentCards(userStats.currentHeroId, newCards);
                        break;
                    case 'activeSkill':
                        updateHeroActiveSkills(userStats.currentHeroId, newCards);
                        break;
                    default:
                        break;
                }
            };

            switch (card.tag) {
                case 'goldMine':
                    const currentLevel = getCardListByTag(userStats, 'goldMine').find(c => c.id === card.id).level;
                    newHourlyIncome += card.baseIncome * Math.pow(card.scaleIncome, currentLevel + 1);
                    const updatedMines = getCardListByTag(userStats, 'goldMine').map(c =>
                        c.id === card.id ? { ...c, level: c.level + 1, upgradeCost: newUpgradeCost } : c
                    );
                    updateHeroMinesGoldCards(userStats.currentHeroId, updatedMines);
                    break;

                case 'heroStat':
                    const updatedHeroStats = { ...newHeroStats };
                    const statEffect = card.effect;
                    updatedHeroStats.baseStats[statEffect.stat] = (updatedHeroStats.baseStats[statEffect.stat] || 0) + statEffect.value;
                    const updatedHeroStatCards = getCardListByTag(userStats, 'heroStat').map(c =>
                        c.id === card.id ? { ...c, level: c.level + 1, upgradeCost: newUpgradeCost } : c
                    );
                    updateHeroCards('heroStat', updatedHeroStatCards);
                    updateHeroStats(userStats.currentHeroId, { baseStats: updatedHeroStats.baseStats });
                    break;

                default:
                    const cardType = card.tag;
                    const updatedCards = getCardListByTag(userStats, cardType).map(c =>
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
