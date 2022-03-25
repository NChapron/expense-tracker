import React from "react";
import "./Card.css";

function Card(props) {
  // here I use a Card Components to learn how to use props.children and set some CSS through props.
  // as well we can limit the code duplication here with the border-radius and the box-shadow.
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
