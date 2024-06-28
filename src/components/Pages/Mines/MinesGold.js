import React from 'react';
import CardList from '../../Cards/CardList';
import cardsConfig from '../../Cards/cardsConfig';

const MinesGold = () => {
    // Вибираємо лише ті картки, які відносяться до шахт
    const minesCards = cardsConfig.filter(card => card.tag === 'mining');

    return <CardList cards={minesCards} />;
};

export default MinesGold;
