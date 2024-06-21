import React, { useState } from 'react';
import './Mines.css';
import { minesData, lockImage } from '../../data/minesData';
import { useUserStats } from '../UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';

const Mines = () => {
    const { userStats, updateUserStats } = useUserStats();
    const [selectedMine, setSelectedMine] = useState(null);

    const handleMineClick = (mineIndex) => {
        const selectedMineData = minesData[mineIndex];
        
        if (mineIndex > 0) {
            const previousMineData = minesData[mineIndex - 1];
            if (previousMineData.level < 3) {
                alert('Попередня шахта повинна бути прокачана до 3 рівня перед відкриттям цієї шахти!');
                return;
            }
        }

        if (selectedMineData.locked) {
            if (userStats.balance >= selectedMineData.cost) {
                updateUserStats({
                    ...userStats,
                    balance: userStats.balance - selectedMineData.cost,
                    hourlyIncome: userStats.hourlyIncome + selectedMineData.income,
                });
                selectedMineData.locked = false; // Розблокування шахти після покупки
            } else {
                alert('Недостатньо золота для покупки шахти!');
            }
        } else {
            setSelectedMine(mineIndex); // Відкрити панель апгрейду
        }
    };

    const handleUpgrade = () => {
        const selectedMineData = minesData[selectedMine];
        if (userStats.balance >= selectedMineData.upgradeCost) {
            updateUserStats({
                ...userStats,
                balance: userStats.balance - selectedMineData.upgradeCost,
                hourlyIncome: userStats.hourlyIncome + selectedMineData.income,
            });
            selectedMineData.level += 1; // Збільшення рівня шахти
            selectedMineData.income += selectedMineData.income; // Оновлення доходу шахти
            selectedMineData.cost += selectedMineData.upgradeCost; // Оновлення вартості шахти

            // Перевірка рівня шахти для автоматичного розблокування наступної шахти
            if (selectedMineData.level >= 3 && selectedMine < minesData.length - 1) {
                minesData[selectedMine + 1].locked = false; // Розблокування наступної шахти
            }

            setSelectedMine(null); // Закрити панель після апгрейду
        } else {
            alert('Недостатньо золота для апгрейду!');
        }
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {minesData.map((mine, index) => (
                    <div key={index} className={`mine-item ${mine.locked ? 'locked' : ''}`} onClick={() => handleMineClick(index)}>
                        <img src={mine.locked ? lockImage : mine.img} alt={`Mine ${mine.id}`} />
                        <div className="mine-cost">Вартість: {mine.cost} золота</div>
                        <div className="mine-income">+{mine.income} золота/год</div>
                        <div className="mine-level">lvl: {mine.level}</div>
                    </div>
                ))}
            </div>

            {selectedMine !== null && (
                <UpgradePanel 
                    mine={minesData[selectedMine]} 
                    onUpgrade={handleUpgrade} 
                    onClose={() => setSelectedMine(null)} 
                />
            )}
        </div>
    );
};

export default Mines;
