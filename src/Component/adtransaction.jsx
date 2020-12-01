import React, { useState, useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../Context/GlobalContext'


export const AdTransaction = () => {

    let [text, setText] = useState('')
    let [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        }

        addTransaction(newTransaction);
    }

    return (
        <div className="add">
            <h3>
                Add Transaction
            </h3>


            <hr />
            <br />
            <form onSubmit={onSubmit}>
                <div>

                    <label htmlFor="text">Text</label>
                    <br />
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <br />
                <div>

                    <label htmlFor="text">Amount <br />(negative-expense, positive-expense)</label>
                    <br />
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>

                <br />
                <div>
                    <button type="submit" className="add-btn">ADD TRANSACTION</button>
                </div>
            </form>
        </div>
    )
}
