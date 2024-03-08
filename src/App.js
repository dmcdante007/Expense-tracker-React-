import React, { useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const Dummyexpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    LocationOfExpenditure: "Mumbai, MH",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    LocationOfExpenditure: "Pune, MH",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    LocationOfExpenditure: "Maryland, U.S",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    LocationOfExpenditure: "Austin, Texas",
    date: new Date(2021, 5, 12),
  },
];
//Used Arrow function to return
const App = () => {
  
  const [expenses, setExpenses] = useState(Dummyexpenses);


  // let tryy = [];
  // for(let i=0; i<4; i++){
  //   tryy.push(
  //   <ExpenseItem
  //       title={expense[i].title}
  //       amount={expense[i].amount}
  //       location={expense[i].LocationOfExpenditure}
  //       date={expense[i].date}
  //     ></ExpenseItem>
  //   )
  // }
  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses]
    })

    console.log('In App.js');
    console.log(expense);
    
  }
  
  

  return (
    
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/* {tryy} */}
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
