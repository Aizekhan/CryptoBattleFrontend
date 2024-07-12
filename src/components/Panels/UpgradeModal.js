import React from 'react';
import './UpgradeModal.css'; // ��������� ���� ��� ���������� ����
import appImages from '../../context/appImages'; // ��������� ������ � appImages.js
import UpgradeButton from '../Cards/UpgradeButton'; // ��������� ��������� UpgradeButton

const UpgradeModal = ({ card, onClose, canUpgrade }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src={appImages.icons.close} alt="Close" className="close-icon" onClick={onClose} />
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
                    {!canUpgrade && <img src={appImages.icons.lock} alt="Conditions not met" className="modal-lock-icon" />}
                    {canUpgrade && <UpgradeButton card={card} onClose={onClose} />} {/* ������������� ��������� UpgradeButton */}
                </div>
            </div>
        </div>
    );
};

export default UpgradeModal;
