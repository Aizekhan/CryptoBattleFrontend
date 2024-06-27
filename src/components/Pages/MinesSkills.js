import React from 'react';
import CardList from '../Cards/CardList';

import image5 from '../../assets/images/MinesPageImages/5.png';
import image6 from '../../assets/images/MinesPageImages/6.png';



    const skillsCards = userStats.mines
        .filter(mine => mine.name.includes('Skill'))
        .map(mine => ({
            ...mine,
            img: mine.id === 5 ? image5 : image6, // Відповідно до ваших зображень
        }));

    return <CardList cards={skillsCards} />;
};

export default MinesSkills;
