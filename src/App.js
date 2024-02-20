import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
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

  return (
    <div>
      <h2>Let's get it!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        location={expense[0].LocationOfExpenditure}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        location={expense[1].LocationOfExpenditure}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        location={expense[2].LocationOfExpenditure}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        location={expense[3].LocationOfExpenditure}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
