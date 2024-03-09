import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const  [amount, newAmount] = useState(props.amount);


  const clickHandler = () => {
    newAmount('100')
    console.log(amount);
  };

  const delItem = () => {
    console.log("Delete it");
  };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={clickHandler}>Change title</button>
      <button onClick={delItem}>Delete</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
