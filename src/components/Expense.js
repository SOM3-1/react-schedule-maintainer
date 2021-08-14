import "./Expense.css";
export function Expense() {
    const expenseDate= new Date(2021, 2 ,28);
    const expenseTitle = "Insurance";
    const expenseAmount  = 369.6;
  return (
    <div className="expense-item">
      <div> {expenseDate.toISOString()} </div>
      <div className="expense-item__description">
        <h2> {expenseTitle}</h2> 
        <div className="expense-item__price"> {expenseAmount} </div>
      </div>
    </div>
  );
}
