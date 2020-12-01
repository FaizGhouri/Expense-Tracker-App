import React from 'react';
import './App.css';
import { Header } from './Component/Header.jsx';
import { Balance } from './Component/balance.jsx';
import { IncomeExpense } from './Component/IncomeExpense.jsx';
import { TransactionList } from './Component/TransactionList.jsx';
import { AdTransaction } from './Component/adtransaction.jsx';
import { GlobalProvider } from './Context/GlobalContext';


function App() {
  return (

    <GlobalProvider>


      <div className="container">

        <div className="App">

          <Header />

          <div className="Main">

            <Balance />

            <IncomeExpense />

            <TransactionList />

            <AdTransaction />

          </div>

        </div>

      </div>
    </GlobalProvider>

  );
}

export default App;
