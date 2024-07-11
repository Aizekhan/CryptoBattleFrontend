import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../.context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const ActiveSkills = () => {
    const { userStats } = useUserStats();

    // Отримуємо активні навички поточного героя
    const activeSkills = getCardListByTag(userStats, 'activeSkill');

    return (
        <div className="active-skills">
            <CardList cards={activeSkills} />
        </div>
    );
};

export default ActiveSkills;
