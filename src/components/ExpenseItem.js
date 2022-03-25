import React from "react";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* Here the Components ExpenseDate is nested inside ExpenseItem Components, and the data from App.js is pass through props */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
