import React, { useState } from 'react';
import './Mines.css';
import { minesData, lockImage } from '../../data/minesData';
import { useUserStats } from '../UserStatsContext';
import UpgradePanel from '../Panels/UpgradePanel';

const Mines = () => {
    const { userStats, updateUserStats, spendBalance } = useUserStats();
    const [mines, setMines] = useState(minesData);
    const [selectedMine, setSelectedMine] = useState(null);

    const handleMineClick = (mineIndex) => {
        const selectedMineData = mines[mineIndex];
        
        if (mineIndex > 0) {
            const previousMineData = mines[mineIndex - 1];
            if (previousMineData.level < 3) {
                alert('Попередня шахта повинна бути прокачана до 3 рівня перед відкриттям цієї шахти!');
                return;
            }
        }

        if (selectedMineData.locked) {
            if (userStats.balance >= selectedMineData.cost) {
                updateUserStats({
                    ...userStats,
                    hourlyIncome: userStats.hourlyIncome + selectedMineData.income,
                });
                spendBalance(selectedMineData.cost); // Віднімання вартості шахти від балансу
                selectedMineData.locked = false; // Розблокування шахти після покупки
                setMines([...mines]); // Оновлення стану після розблокування
            } else {
                alert('Недостатньо золота для покупки шахти!');
            }
        } else {
            setSelectedMine(mineIndex); // Відкрити панель апгрейду
        }
    };

    const handleUpgrade = () => {
        const selectedMineData = mines[selectedMine];
        if (userStats.balance >= selectedMineData.upgradeCost) {
            updateUserStats({
                ...userStats,
                hourlyIncome: userStats.hourlyIncome + selectedMineData.income,
            });
            spendBalance(selectedMineData.upgradeCost); // Віднімання вартості апгрейду від балансу
            selectedMineData.level += 1; // Збільшення рівня шахти
            selectedMineData.income *= 2; // Оновлення доходу шахти
            selectedMineData.cost *= 2; // Оновлення вартості шахти

            // Перевірка рівня шахти для автоматичного розблокування наступної шахти
            if (selectedMineData.level >= 3 && selectedMine < mines.length - 1) {
                mines[selectedMine + 1].locked = false; // Розблокування наступної шахти
            }

            setMines([...mines]); // Оновлення стану після апгрейду
            setSelectedMine(null); // Закрити панель після апгрейду
        } else {
            alert('Недостатньо золота для апгрейду!');
        }
    };

    return (
        <div className="mines-container">
            <h1>Mines Page</h1>
            <div className="mines-grid">
                {mines.map((mine, index) => (
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
                    mine={mines[selectedMine]} 
                    onUpgrade={handleUpgrade} 
                    onClose={() => setSelectedMine(null)} 
                />
            )}
        </div>
    );
};

export default Mines;
