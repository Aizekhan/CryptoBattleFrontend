import React from 'react';
import Card from './Card';
import './CardList.css';  // Імпортуємо CSS файл для стилізації

const CardList = ({ cards, onCardClick }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card key={index} card={card} onClick={() => onCardClick(card)} />
            ))}
        </div>
    );
};

export default CardList;
