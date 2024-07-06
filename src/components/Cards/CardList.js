import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
    console.log('cards in CardList:', cards); // Додайте це для перевірки карток

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
