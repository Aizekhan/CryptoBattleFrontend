import React, { useState } from 'react';
import './Card.css';
import { useUserStats } from '../../context/UserStatsContext';
import { cardBackgrounds } from './cardsConfig';
import UpgradeModal from '../Panels/UpgradeModal';
import upgradeIcon from '../../assets/icons/upgrade-icon.png';
import lockIcon from '../../assets/images/lock.png';

const Card = ({ card }) => {
    const { userStats } = useUserStats();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const prerequisitesMet = card.prerequisites.every(prereq => {
        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
        return prereqCard && prereqCard.level >= prereq.level;
    });

    console.log('card in Card:', card);

    const backgroundImage = cardBackgrounds[card.tag] || card.img;

    return (
        <>
            <div
                className={`card ${card.tag}`}
                key={card.id}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="card-img-container">
                    <img src={card.img} alt={card.name} className="card-img" />
                </div>
                <div className="card-header">
                    <h3>{card.name}</h3>
                    <p>Level: {userStats.mines.find(c => c.id === card.id)?.level || card.level}</p>
                </div>
                <div className="card-prerequisites">
                    {card.prerequisites.map(prereq => {
                        const prereqCard = userStats.mines.find(c => c.id === prereq.id);
                        return (
                            <p key={prereq.id}>
                                {prereqCard ? prereqCard.name : `Card ${prereq.id}`} Level {prereq.level} required
                            </p>
                        );
                    })}
                </div>
                <div className="card-upgrade-button">
                    <button onClick={openModal} className="transparent-button">
                        <img src={prerequisitesMet ? upgradeIcon : lockIcon} alt="Upgrade" className="button-icon" />
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <UpgradeModal
                    card={card}
                    onClose={closeModal}
                    canUpgrade={prerequisitesMet}
                />
            )}
        </>
    );
};

export default Card;
