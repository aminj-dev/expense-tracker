import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction => transaction.amounts));
  
  const income = amounts
  .filter(item => item > 0)
  .reduce((allIncome, newItem) => allIncome += newItem, 0)
  .toFixed(2);
  
  const expense = amounts
  .filter(item => item < 0)
  .reduce((newItem, allExpense) => allExpense+=newItem, 0)
  .toFixed(2);  
  
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money positive">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money negative">-${Math.abs(expense)}</p>
        </div>
      </div>
  )
}

