import React from 'react';
import './Card.css';
import { useUserStats } from '../../context/UserStatsContext';
import { cardBackgrounds } from './cardsConfig';
import UpgradeButton from './UpgradeButton'; // Імпортуємо компонент UpgradeButton

const Card = ({ card }) => {
    const { userStats } = useUserStats();


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
            <UpgradeButton card={card} /> {/* Використовуємо компонент UpgradeButton */}
            {!userStats.mines.find(c => c.id === card.id)?.level && (
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
