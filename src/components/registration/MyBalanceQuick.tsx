"use client";

import React, { useEffect } from 'react';

interface MyBalanceQuickProps {
    points: number;
}

const MyBalanceQuick: React.FC<MyBalanceQuickProps> = ({ points }) => {
    useEffect(() => {
        // Store points in sessionStorage to persist across pages
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('points', points.toString());
        }
    }, [points]);

    return (
        <div className="points-counter">
            Balance: <span id="points">{points}</span>&nbsp;Ions
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${points}%` }}></div>
            </div>
        </div>
    );
};

export default MyBalanceQuick; 