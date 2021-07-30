import { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
      />

    </div>
  );
}

export default App;
