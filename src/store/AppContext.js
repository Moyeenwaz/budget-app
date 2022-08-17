import React, { useReducer } from 'react';

const initialState = {
  budget: 0,
  expenses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      const updatedExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      return {
        ...state,
        expenses: updatedExpenses,
      };
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      };
    default:
      return state;
  }
};

export const AppContext = React.createContext(initialState);

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
