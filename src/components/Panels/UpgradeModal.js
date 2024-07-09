import React from 'react';
import './UpgradeModal.css';
import closeIcon from '../../assets/icons/close-icon.png';
import UpgradeButton from '../Cards/UpgradeButton';

const UpgradeModal = ({ card, onClose, canUpgrade }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src={closeIcon} alt="Close" className="close-icon" onClick={onClose} />
                <div className="modal-body">
                    <h2>{card.name}</h2>
                    <p>{card.effect}</p>
                    <div className="modal-prerequisites">
                        {card.prerequisites.map(prereq => (
                            <p key={prereq.id}>
                                {`Card ${prereq.id}`} Level {prereq.level} required
                            </p>
                        ))}
                    </div>
                    {!canUpgrade && <p>Conditions not met</p>}
                    <UpgradeButton card={card} onClose={onClose} />
                </div>
            </div>
        </div>
    );
};

export default UpgradeModal;
