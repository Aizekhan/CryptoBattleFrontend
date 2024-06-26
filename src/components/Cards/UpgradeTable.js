import React from 'react';

const UpgradeTable = ({ card, gold, handleUpgrade }) => {
    return (
        <div>
            <img src={card.img} alt={card.name} style={{ width: '100px', height: '100px' }} />
            <h3>{card.name}</h3>
            <p>Level: {card.currentLevel}</p>
            <p>Income: {card.income}</p>
            <p>Upgrade Cost: {card.upgradeCost}</p>
            <button onClick={handleUpgrade}>Upgrade</button>
            <p>Gold: {gold}</p>
        </div>
    );
};

export default UpgradeTable;
