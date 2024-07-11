import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
 

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
