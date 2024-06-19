import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <div className="username">Максим (Trainer)</div>
        <div className="currency">Binance</div>
      </div>
      <div className="stats">
        <div>Дохід за тап: +15</div>
        <div>Рівень акаунту: 7</div>
        <div>Дохід в годину: +992,27K</div>
      </div>
      <div className="coins">
        <div>24 160 678</div>
      </div>
      <div className="main-content">
        <img src="wild_boar.png" alt="Wild Boar" className="wild-boar"/>
        <div className="points">+15 +15 +15 +15 +15</div>
      </div>
      <div className="footer">
        <Link to="/info">Інформація</Link>
        <Link to="/heroes">Герої</Link>
        <Link to="/settings">Налаштування</Link>
      </div>
    </div>
  );
};

export default Home;