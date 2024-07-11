import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
    if (!Array.isArray(cards)) {
        return null; // Якщо cards не є масивом, нічого не відображаємо
    }

    return (
        <div className="card-list">
            {cards.map(card => (
                <div className="card-container" key={card.id}>
                    <Card card={card} />
                </div>
            ))}
        </div>
    );
};

export default CardList;
