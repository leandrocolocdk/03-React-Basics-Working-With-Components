import Expenses from "./components/Expenses/Expenses";

const App = () => {
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
      <Expenses
        items={expenses}
      />

    </div>
  );
}

export default App;
