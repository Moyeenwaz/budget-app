import React, { useContext, useState } from 'react';
import { AppContext } from '../store/AppContext.js';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = (props) => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const { dispatch } = useContext(AppContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: +cost,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
    setName('');
    setCost('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost" className="">
            Cost
          </label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="col-sm mt-4">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
