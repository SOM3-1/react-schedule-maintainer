import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';



let i =0;
const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title);

const buttonListener = () =>{
  i= i+1;
  console.log("i value = " + i);
  setTitle(i);
  console.log("title value = "+ title);
  console.log("--------------");

};
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick = {buttonListener} >Title change</button>
    </Card>
  );
}

export default ExpenseItem;
