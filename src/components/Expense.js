import "./Expense.css";
import { ExpenseDate } from "./ExpenseDate";
export function Expense(data) {
  return (
    <div >
      <ExpenseDate date={data.date}/>
      <div className="expense-item__description"><h2> {data.title}</h2>
        <div className="expense-item__price"> {data.ammount} </div>
      </div>
    </div>
  );
}
