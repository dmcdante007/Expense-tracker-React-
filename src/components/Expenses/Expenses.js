import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear ] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return  expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      >
      </ExpensesFilter>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key = {expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.LocationOfExpenditure}
        />
      ))}

      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        location={props.items[0].LocationOfExpenditure}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        location={props.items[1].LocationOfExpenditure}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        location={props.items[2].LocationOfExpenditure}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        location={props.items[3].LocationOfExpenditure}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expenses;
