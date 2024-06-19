import React from 'react';
import './Home.css';  // Додайте цей імпорт

const Home = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    return (
        <div className="home-container">
            <div className="header">
                <div className="username">{userInfo?.username}</div>
                <div className="currency">24 160 678</div>
            </div>
            <div className="main-content">
                <div className="stats">Дохід за тап: +15</div>
                <div className="stats">Рівень аккаунту: 7</div>
                <div className="coins">Дохід в годину: +992,27K</div>
                <img src="../images/WildBoar.png" alt="Wild Boar" className="wild-boar" />
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