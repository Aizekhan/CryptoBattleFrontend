import React, { useState } from 'react';
import { useUserStats } from '../../contexts/UserStatsContext';
import './Mines.css';
import './UpgradePanel.css';

const Mines = () => {
    const { userStats, upgradeMine, spendBalance } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);
    const [upgradePanelVisible, setUpgradePanelVisible] = useState(false);

    const handleMineClick = (mine) => {
        setSelectedMine(mine);
        setUpgradePanelVisible(true);
    };

    const handleUpgrade = () => {
        const upgradeCost = selectedMine.cost * 2 ** (selectedMine.currentLevel - 1);
        if (userStats.balance >= upgradeCost) {
            spendBalance(upgradeCost);
            upgradeMine(selectedMine.id);
            setUpgradePanelVisible(false);
        } else {
            alert("Недостатньо коштів для апгрейду!");
        }
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {userStats.mines.map((mine) => (
                    <div
                        key={mine.id}
                        className={`mine-item ${mine.locked ? 'locked' : ''}`}
                        onClick={() => !mine.locked && handleMineClick(mine)}
                    >
                        <img src={mine.locked ? lockImage : mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Вартість: {mine.cost} золота</div>
                        <div className="mine-income">+{mine.income} золота/год</div>
                        <div className="mine-level">lvl: {mine.currentLevel}</div>
                    </div>
                ))}
            </div>
            {upgradePanelVisible && (
                <div className="overlay">
                    <div className="mine-upgrade-panel">
                        <div className="mine-info">
                            <img src={selectedMine.img} alt={`Mine ${selectedMine.id}`} />
                            <div>Вартість апгрейду: {selectedMine.cost * 2 ** (selectedMine.currentLevel - 1)} золота</div>
                            <div>Дохід: +{selectedMine.income} золота/год</div>
                            <div>Поточний рівень: {selectedMine.currentLevel}</div>
                        </div>
                        <div className="upgrade-buttons">
                            <button onClick={handleUpgrade}>Upgrade</button>
                            <button onClick={() => setUpgradePanelVisible(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mines;
