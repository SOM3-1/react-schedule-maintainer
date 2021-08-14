import "./Expenses.css";
import {Expense} from "./Expense";
export const Expenses = (data) =>{
    return (
        <div className="expenses" >
           {data.name.map(item => (
                <Expense id={item.id} title={item.title} 
                date={item.date} ammount={item.amount} />
            ))}
        </div>
      );

};