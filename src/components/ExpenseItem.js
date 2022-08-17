import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext.js';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const handleDelete = () => {
    dispatch({ type: 'DELETE_EXPENSE', payload: props.id });
  };
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span class=" mr-3">£{props.cost} </span>
        <TiDelete size="1.5em" onClick={handleDelete} />
      </div>
    </li>
  );
};

export default ExpenseItem;
