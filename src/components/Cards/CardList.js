import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
};

export default CardList;
