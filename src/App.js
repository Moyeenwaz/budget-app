import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './store/AppContext.js';

export default function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3"> Budget App</h1>
        <div className="row">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="row ">
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
