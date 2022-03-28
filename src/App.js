import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

// DUMMY_DATA to set-up the Expense-Tracker
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // save the data pass from NewExpense
  const addExpenseHandler = (newExpense) => {
    // I could just do "setExpenses([newExpense, ...expenses])" but is not correct. 
    // With the function I'm sure that I have the last snapshot of the object.
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  console.table(expenses);

  // This is why we need to have only one root element. This is the code execute under the hood. In modern react.js we use JSX.

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* I pass the Dummy data to Expenses.js */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
