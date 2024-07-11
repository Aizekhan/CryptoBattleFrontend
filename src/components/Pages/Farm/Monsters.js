import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../.context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const Monsters = () => {
    const { userStats } = useUserStats();

    // �������� ������ ������� ��������� �����
    const monsterCards = getCardListByTag(userStats, 'monster');

    return (
        <div className="monsters">
            <CardList cards={monsterCards} />
        </div>
    );
};

export default Monsters;
