import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  } else if (props.item.length === 1) {
    return <ul className="expenses-list">
    {props.item.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      location={expense.LocationOfExpenditure}
    />
  ))}
    <h2 className="expenses-list__fallback">Only one expense found, Please add more...</h2>
  </ul>
    
  }

return (
    <ul className="expenses-list">
        {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.LocationOfExpenditure}
        />
      ))}
      </ul>
)
        }

export default ExpensesList;
