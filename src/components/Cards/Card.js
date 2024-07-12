import React, { useState } from 'react';
import './Card.css';
import { useUserStats } from '../../context/UserStatsContext';
import { cardBackgrounds } from './cardsConfig';
import UpgradeModal from '../Panels/UpgradeModal';
import appImages from '../../context/appImages';
import { prerequisitesMet } from './cardUtils';

const Card = ({ card }) => {
    const { userStats } = useUserStats();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const canUpgrade = prerequisitesMet(userStats, card) && userStats.balance >= card.upgradeCost;
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
                    <p>Level: {card.level}</p>
                    <h3>{card.name}</h3>
                </div>
                <div className="card-upgrade-button">
                    <img
                        src={canUpgrade ? appImages.icons.upgrade : appImages.icons.lock}
                        alt="Upgrade"
                        onClick={openModal}
                        className="card-upgrade-img-button"
                    />
                </div>
            </div>
            {isModalOpen && (
                <UpgradeModal
                    card={card}
                    onClose={closeModal}
                    canUpgrade={canUpgrade}
                />
            )}
        </>
    );
};

export default Card;
