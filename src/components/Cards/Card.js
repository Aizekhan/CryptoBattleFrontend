import React from 'react';
import lockIcon from '../../assets/images/lock.png';
import upgradeIcon from '../../assets/icons/upgrade-icon.png'; // Імпортуємо зображення кнопки
import './Card.css';
import { useUserStats } from '../../context/UserStatsContext';
import { cardBackgrounds } from './cardsConfig';

const Card = ({ card }) => {
    const { userStats, updateUserStats, updateHeroStats } = useUserStats();

    console.log('card in Card:', card); // Додайте це для перевірки даних картки

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

    const backgroundImage = cardBackgrounds[card.tag] || card.img;

    return (
        <div
            className={`card ${card.tag}`} // Динамічно задаємо клас
            key={card.id}
            style={{ backgroundImage: `url(${backgroundImage})` }} // Динамічно задаємо фон
        >
            <img src={card.img} alt={card.name} className="card-img" />
            <h3>{card.name}</h3>
            <p>Level: {userStats.mines.find(c => c.id === card.id)?.level || card.level}</p>
            <p>Effect: {card.effect}</p>
            <button
                onClick={handleUpgrade}
                disabled={!canUpgrade}
                className={buttonClass}
            >
                {buttonContent}
            </button>
            {!prerequisitesMet && (
                <div className="prerequisites">
                    {card.prerequisites.map(prereq => {
                        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
                        return (
                            <p key={prereq.id}>
                                {prereqCard ? prereqCard.name : `Card ${prereq.id}`} Level {prereq.level} required
                            </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Card;
