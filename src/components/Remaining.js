import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext.js';

const Remaining = (props) => {
  const { budget, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((acc, item) => {
    return acc + item.cost;
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
