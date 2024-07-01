import React from 'react';
import userIcon from '../../assets/images/user-icon.png';
import walletIcon from '../../assets/images/wallet-icon.png';
import coinImage from '../../assets/images/coin.png';
import { useUserStats } from '../../context/UserStatsContext';
import './TopBar.css';

const TopBar = ({ isBattlePage }) => {
    const { userStats } = useUserStats();
    const currentHero = userStats.heroes.find(hero => hero.id === userStats.currentHeroId);
    const opponentHero = userStats.heroes.find(hero => hero.id !== currentHero.id); // Placeholder for the opponent

    return (
        <div className="top-bar">
            {!isBattlePage ? (
                <>
                    <div className="user-info">
                        <img src={userIcon} alt="User" />
                        <span>{userStats.username}</span>
                    </div>
                    <div className="balance-info">
                        <img src={coinImage} alt="Coin" className="coin-icon" />
                        <span>{userStats.balance}</span>
                    </div>
                    <div className="wallet-info">
                        <img src={walletIcon} alt="Wallet" />
                    </div>
                </>
            ) : (
                <div className="battle-hp-info">
                    <div className="hp-info">
                        <span>{currentHero.name}</span>
                        <span>HP: {userStats.heroes.find(hero => hero.id === userStats.currentHeroId).baseStats.hp}</span>
                    </div>
                    <div className="hp-info">
                        <span>{opponentHero.name}</span>
                        <span>HP: {userStats.heroes.find(hero => hero.id === opponentHero.id).baseStats.hp}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopBar;
