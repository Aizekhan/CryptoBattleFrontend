import React from 'react';
import CardList from '../Cards/CardList';
import { useUserStats } from '../../context/UserStatsContext';
import image3 from '../../assets/images/MinesPageImages/3.png';
import image4 from '../../assets/images/MinesPageImages/4.png';

const MinesRes = () => {
    const { userStats } = useUserStats();

    const resCards = userStats.mines
        .filter(mine => mine.name.includes('Resource'))
        .map(mine => ({
            ...mine,
            img: mine.id === 3 ? image3 : image4, // Відповідно до ваших зображень
        }));

    return <CardList cards={resCards} />;
};

export default MinesRes;
