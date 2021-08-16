import './ExpenseFilteredArray.css'
import ExpenseItem from './ExpenseItem';
export const ExpenseFilteredArray =(props)=>
{
    if (props.items.length=== 0)
    {
        return ( <p className = "expenses-list__fallback"> Not found</p>);
    }
    
    return ( props.items.map((expense) => (
        <ul className = "expenses-list">
      <ExpenseItem 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      </ul>
    )));


}