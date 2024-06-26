import React from 'react';
import { useUserStats } from '../../context/UserStatsContext';
import UpgradeTable from './UpgradeTable';

const UpgradeCard = ({ card, updateCard }) => {
    const { userStats, spendBalance } = useUserStats();

    const handleUpgrade = () => {
        if (userStats.balance >= card.upgradeCost) {
            spendBalance(card.upgradeCost);
            
            const newLevel = card.currentLevel + 1;
            const newIncome = card.income * 2;
            const newUpgradeCost = card.upgradeCost * 2;

            updateCard(card.id, newLevel, newIncome, newUpgradeCost);

            console.log('Card upgraded!');
        } else {
            console.log('Not enough gold!');
        }
    };

    return (
        <UpgradeTable card={card} gold={userStats.balance} handleUpgrade={handleUpgrade} />
    );
};

export default UpgradeCard;
