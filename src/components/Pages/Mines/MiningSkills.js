import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../.context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const MiningSkills = () => {
    const { userStats } = useUserStats();

    // Отримуємо картки навичок видобутку поточного героя
    const miningSkills = getCardListByTag(userStats, 'miningSkill');

    return (
        <div className="mining-skills">
            <CardList cards={miningSkills} />
        </div>
    );
};

export default MiningSkills;
