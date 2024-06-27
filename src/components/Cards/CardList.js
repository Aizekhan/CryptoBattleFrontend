import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards, onUpgrade }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card 
                    key={index} 
                    card={card}
                    onUpgrade={() => onUpgrade(card)}
                />
            ))}
        </div>
    );
};

export default CardList;
