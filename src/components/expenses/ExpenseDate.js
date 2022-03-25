import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  // For the format, check the doc {{toLocalString}} online to learn more about the return value
  // To keep the JSX clean it's better to set a variable here with the long code
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-GB", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
