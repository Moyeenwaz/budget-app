import React, { useContext, useState } from 'react';
import { AppContext } from '../store/AppContext.js';
import Edit from './Edit';
import ViewBudget from './ViewBudget';

const Budget = (props) => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {!isEditing ? (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      ) : (
        <Edit handleSaveClick={handleSaveClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
