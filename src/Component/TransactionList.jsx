import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../Context/GlobalContext';
import { Transaction } from './Transaction.jsx'


export const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)

    return (

        <div className="trans">
            <h3>
                History
            </h3>
            <hr style={{ color: 'lightgray' }} />
            <ul className="list">

                {transactions.map(transaction => (<Transaction key={transaction.id}  transaction={transaction} /> ))}


            </ul>
        </div>
    )
}

