import React, { useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../Context/GlobalContext';

export const Balance = () => {

    const { transactions } = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>

            <p className="balance">YOUR BALANCE</p>

            <p className="dollar">${total}</p>

        </div>
    )
}

