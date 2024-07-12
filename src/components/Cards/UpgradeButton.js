import React from 'react';
import './UpgradeButton.css';
import { useUserStats } from '../../context/UserStatsContext';
import appImages from '../../context/appImages';

const UpgradeButton = ({ card, onClose }) => {
    const { userStats, upgradeCard } = useUserStats();

    const canUpgrade = userStats.balance >= card.upgradeCost;

    const handleUpgrade = () => {
        if (canUpgrade) {
            upgradeCard(userStats.currentHeroId, card.id);
            onClose();
        }
    };

    return (
        <button
            onClick={handleUpgrade}
            disabled={!canUpgrade}
            className={canUpgrade ? 'upgrade-button' : 'no-balance-button'}
        >
            <img src={appImages.icons.upgrade} alt="Upgrade" />
            <span>Cost: {card.upgradeCost}</span>
        </button>
    );
};

export default UpgradeButton;
