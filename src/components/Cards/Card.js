import React from 'react';
import lockIcon from '../../assets/images/lock.png';
import './Card.css';
import { useUserStats } from '../../context/UserStatsContext';

const Card = ({ card }) => {
    const { userStats, updateUserStats } = useUserStats();

    console.log('Rendering card:', card); // Логування для перевірки картки

    const prerequisitesMet = card.prerequisites.every(prereq => {
        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
        return prereqCard && prereqCard.level >= prereq.level;
    });

    const hasEnoughBalance = userStats.balance >= card.upgradeCost;
    const canUpgrade = prerequisitesMet && hasEnoughBalance;

    const handleUpgrade = () => {
        if (canUpgrade) {
            const updatedMines = userStats.mines.map(c => 
                c.id === card.id ? { ...c, level: c.level + 1 } : c
            );

            updateUserStats({
                balance: userStats.balance - card.upgradeCost,
                mines: updatedMines
            });

            console.log('Card upgraded:', card); // Логування для перевірки апгрейду
        }
    };

    let buttonContent = `Upgrade (${card.upgradeCost})`;
    let buttonClass = '';

    if (!prerequisitesMet) {
        buttonContent = (
            <>
                <img src={lockIcon} alt="Locked" className="lock-icon" />
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
            </>
        );
        buttonClass = 'locked';
    } else if (!hasEnoughBalance) {
        buttonClass = 'no-balance';
    } else {
        buttonClass = 'can-upgrade';
    }

    return (
        <div className="card" key={card.id}>
            <img src={card.img} alt={card.name} className="card-img" />
            <h3>{card.name}</h3>
            <p>Level: {card.level}</p>
            <p>Effect: {card.effect}</p>
            <button 
                onClick={handleUpgrade}
                disabled={!canUpgrade}
                className={buttonClass}
            >
                {buttonContent}
            </button>
        </div>
    );
};

export default Card;
