"use client";

import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import './MyBalanceQuick.css'; // Make sure to create this CSS file

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

    const handleWithdraw = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are going to withdraw GLL Ions out of our system into your wallet. Once Successfully withdrawn, you can see the balance in your wallet.",
            imageUrl: "https://ibb.co/HTyntGFS",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, withdraw it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Withdraw Process Initiated!",
                text: "Please check your wallet after 10 minutes",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className="points-counter">
            <div className="balance-text">
                Balance: <span id="points">{points}</span>&nbsp;Ions
            </div>
            {/* <div className="progress-container">
                <div className="progress-bar" style={{ width: `${points}%` }}></div>
            </div> */}
            <div className="button-container">
                <button className="buy-ions-button" onClick={handleWithdraw}>Withdraw</button>
            </div>
        </div>
    );
};

export default MyBalanceQuick; 