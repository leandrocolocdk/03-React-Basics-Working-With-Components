import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Internet",
      amount: 91,
      date: new Date(2021, 5, 15),
    },
    {
      id: "e2",
      title: "House Insurance",
      amount: 500,
      date: new Date(2021, 5, 20),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 295,
      date: new Date(2021, 5, 28),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
