import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";

const Expenses = ({ expenses }) => {
  const items = expenses.map((item) => (
    <ExpenseItem
      title={item.title}
      amount={item.amount}
      date={item.date}
    ></ExpenseItem>
  ));

  return <Card className="expenses">{items}</Card>;
};

export default Expenses;
