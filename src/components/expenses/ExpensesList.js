import React from "react";
import ExpenseItem from "../expenses/ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  // I check if there is data, if not this message is seen
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  // I render the list dynamically with .map if >0
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
