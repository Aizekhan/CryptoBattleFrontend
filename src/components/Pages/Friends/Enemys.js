import React from 'react';
import { Outlet } from 'react-router-dom';

const Enemys = () => {
    return (
        <div>
            <Outlet /> {/* ��� ������������ ���� ������� �������� */}
        </div>
    );
};

export default Enemys;
