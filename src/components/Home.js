import React from 'react';
import './Home.css'; 
import boarImage from '../assets/images/boar.png';
import StatsBar from './StatsBar';

const Home = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return (
        <div className="home-container">
            <StatsBar 
                tapIncome="+15"
                level={7}
                hourlyIncome="+992,27K"
            />
            <div className="balance">
                <span className="balance-icon">💰</span>
                <span>24 160 678</span>
            </div>
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

export default Home;