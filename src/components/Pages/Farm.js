// src/components/Pages/Farm.js
import React from 'react';
import './Farm.css'; 
import boarImage from '../../assets/images/boar.png';

const Farm = () => {
    return (
        <div className="farm-container">
            <div className="main-content">
                <img src={boarImage} alt="Boar" className="boar-image" />
                <div className="points">+15</div>
            </div>
            <div className="footer">
                <button>Бій</button>
                <button>Мапа</button>
                <button>Інформація</button>
            </div>
        </div>
    );
};

export default Farm;