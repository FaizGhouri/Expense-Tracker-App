import React, { useContext } from 'react';
import '../App.css'
import { GlobalContext } from '../Context/GlobalContext';

export const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (

        <div className="home">

            <div className="income">

                <p>INCOME</p>

                <p style={{ color: 'green', marginTop: '-10px' }}>${income}</p>

            </div>

            <hr />

            <div className="expense">

                <p>EXPENSE</p>

                <p style={{ color: 'red', marginTop: '-10px' }}>${expense}</p>

            </div>

        </div>
    )
}