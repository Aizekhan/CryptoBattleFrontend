import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <div className="card-container" key={index}>
                    <Card 
                        card={card}
                    />
                </div>
            ))}
        </div>
    );
};

export default CardList;
