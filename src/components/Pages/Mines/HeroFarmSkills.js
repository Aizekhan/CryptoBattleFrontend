import React from 'react';
import CardList from '../../Cards/CardList';
import { useUserStats } from '../../../context/UserStatsContext';

const HeroFarmSkills = () => {
    const { userStats } = useUserStats();
    const currentHeroId = userStats.currentHeroId;

    // �������� �� ����� ��� ��������� �����
    const heroCards = userStats.heroes.find(hero => hero.id === currentHeroId)?.cards || [];

    // �������� ��������� ������� ��� ��������� �����
    const heroFarmSkills = heroCards.filter(card => card.tag === 'farmSkill');

    // �������� ����� ���������� �������
    const firstHeroFarmSkill = heroFarmSkills.length > 0 ? [heroFarmSkills[0]] : [];

    return (
        <div className="hero-farm-skills">
            <CardList cards={firstHeroFarmSkill} />
        </div>
    );
};

export default HeroFarmSkills;