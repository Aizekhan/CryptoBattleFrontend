import React from 'react';
import lockIcon from '../../assets/images/lock.png';
import './Card.css';
import { useUserStats } from '../../context/UserStatsContext';

const Card = ({ card, onUpgrade }) => {
    const { userStats } = useUserStats();

    // Логіка перевірки умов прокачки
    const prerequisitesMet = card.prerequisites.every(prereq => {
        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
        return prereqCard && prereqCard.level >= prereq.level;
    });

    const hasEnoughBalance = userStats.balance >= card.upgradeCost;

    const canUpgrade = prerequisitesMet && hasEnoughBalance;

    let buttonContent = 'Upgrade';
    let buttonClass = '';

    if (!prerequisitesMet) {
        buttonContent = (
            <>
                <img src={lockIcon} alt="Locked" />
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
    }

    return (
        <div className="card">
            <img src={card.img} alt={card.name} className="card-img" />
            <h3>{card.name}</h3>
            <p>Level: {card.level}</p>
            <p>Effect: {card.effect}</p>
            <button 
                onClick={canUpgrade ? onUpgrade : null}
                disabled={!canUpgrade}
                className={buttonClass}
            >
                {buttonContent}
            </button>
        </div>
    );
};

export default Card;
