import React from 'react';
import './StatsBar.css';

const StatsBar = ({ tapIncome, level, hourlyIncome }) => {
    return (
        <div className="stats-bar">
            <div className="stat">
                <span>Дохід за тап</span>
                <span className="value">{tapIncome}</span>
            </div>
            <div className="stat">
                <span>Рівень акаунту</span>
                <span className="value">{level}</span>
            </div>
            <div className="stat">
                <span>Дохід в годину</span>
                <span className="value">{hourlyIncome}</span>
            </div>
        </div>
    );
};

export default StatsBar;