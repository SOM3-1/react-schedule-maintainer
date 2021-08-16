import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const[buttonPress, setButtonValue] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setButtonValue(true);
  };

  const onAddButtonHandler = ()=> 
  {
    setButtonValue(false);
  }

  const cancelButtonHandler = () =>
  {
    setButtonValue(true);
  }

  return (
    <div className='new-expense'>
      {buttonPress && <button onClick = {onAddButtonHandler}>Add</button>}
      {!buttonPress && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButton = {cancelButtonHandler} />}
    </div>
  );
};

export default NewExpense;
