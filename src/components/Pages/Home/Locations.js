import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../.context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const Locations = () => {
    const { userStats } = useUserStats();

    // �������� ������ ������� ��������� �����
    const locationCards = getCardListByTag(userStats, 'location');

    return (
        <div className="locations">
            <CardList cards={locationCards} />
        </div>
    );
};

export default Locations;
