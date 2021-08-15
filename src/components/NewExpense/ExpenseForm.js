import "./ExpenseForm.css";
import React, { useState } from "react";
export const ExpenseForm = (props) => {

  //diff state for diff evennt
  const [enteredTitle, updateTitle] = useState("");
  const [enteredAmount, updateAmount] = useState("");
  const [enteredDate, updateDate] = useState("");

  // this if we use single state
  // data previous and method to set
  // const [userInput, setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : ''  });

  const titleChangeHandler = (event) => {
    //not recommended as previous state may be lost
    // setUserInput(
    //   {
    //     ...userInput,
    //     enteredTitle :event.target.value,
    //   });
    //this stores previous states always
    // setUserInput( (prevState) => {
    //   return {... prevState ,
    //     enteredTitle : event.target.value};
    // });

    updateTitle(event.targer.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });

    updateAmount(event.targer.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });

    updateDate(event.targer.value);
  };

  const submitHandler = (event) =>{
    //prevent reloading due to default behavior
    event.preventDefault();
    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    updateTitle('');
    updateAmount('');
    updateDate('');


};

  return (
    <form onSubmit = {submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input type="text" value ={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value ={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value ={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};
