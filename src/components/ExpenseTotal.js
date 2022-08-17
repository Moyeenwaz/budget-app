import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext.js';

const ExpenseTotal = (props) => {
  const { expenses, budget } = useContext(AppContext);
  const expenseTotal = expenses.reduce((acc, item) => acc + item.cost, 0);

  const alertType = expenseTotal > budget ? 'alert-danger' : 'alert-primary';
  return (
    <div className={`alert ${alertType}`}>
      <span>Spent so far: ${expenseTotal}</span>
    </div>
  );
};

export default ExpenseTotal;
