import React, { useState } from 'react'
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
const ExpenseItem = (props) => {
    const { expenseDate, expenseTitle, expenseAmount } = props;
      
    
    const clickHandler = () =>{
    
        console.log("Change title")
    }
    
    return (
       
        <Card className="expense-item">
            <ExpenseDate date={expenseDate}/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
     
    )
}

export default ExpenseItem