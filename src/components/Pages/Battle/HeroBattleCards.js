import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';
import { getCardListByTag } from '../../Cards/cardUtils';

const HeroBattleCards = () => {
    const { userStats } = useUserStats();

    // �������� ����� ������ ��������� �����
    const heroBattleCards = getCardListByTag(userStats, 'battleCard');

    return (
        <div className="hero-battle-cards">
            <CardList cards={heroBattleCards} />
        </div>
    );
};

export default HeroBattleCards;
