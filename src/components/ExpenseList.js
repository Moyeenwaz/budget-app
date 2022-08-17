import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext.js';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {
  const { expenses } = useContext(AppContext);
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
