import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 22),
    },

    {
      id: "e2",
      title: "Toilet",
      amount: 294.67,
      date: new Date(2021, 5, 24),
    },

    {
      id: "e3",
      title: "House",
      amount: 294.67,
      date: new Date(2021, 3, 29),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
