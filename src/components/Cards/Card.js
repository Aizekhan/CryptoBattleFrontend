import React from 'react';
import './Card.css';  // Імпортуємо CSS файл для стилізації

const Card = ({ card, onClick }) => {
    return (
        <div className="card" onClick={onClick}>
            <img src={card.img} alt={card.name} className="card-img" />
            <h3>{card.name}</h3>
            <p>Level: {card.currentLevel}</p>
            <p>Income: {card.income}</p>
        </div>
    );
};

export default Card;
