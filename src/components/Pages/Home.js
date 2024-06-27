import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SubNavigation from '../Panels/SubNavigation';
import CardList from '../Cards/CardList';
import { useUserStats } from '../../context/UserStatsContext';

const Home = () => {
    const subPages = [
           { path: 'sub1', name: 'Hero' },
        { path: 'sub2', name: 'Equip' },
        { path: 'sub3', name: 'Stats' },
        { path: 'sub4', name: 'Story' },

    ];

    const { userStats, updateUserStats } = useUserStats();

    const [cards, setCards] = useState([
        { id: 1, name: 'Card 1', level: 1, effect: 'Effect 1', img: '/path/to/image1.png', prerequisites: [], upgradeCost: 100 },
        { id: 2, name: 'Card 2', level: 2, effect: 'Effect 2', img: '/path/to/image2.png', prerequisites: [{ id: 1, level: 2 }], upgradeCost: 200 },
        // Додайте більше карток тут
    ]);

    const handleUpgrade = (card) => {
        if (userStats.balance >= card.upgradeCost) {
            setCards(cards.map(c => c.id === card.id ? { ...c, level: c.level + 1 } : c));
            updateUserStats({ balance: userStats.balance - card.upgradeCost });
        }
    };

    return (
        <div>
            <SubNavigation basePath="/home" subPages

    