import React from 'react'
import './ExpenseDate.css'

var mL = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const ExpenseDate = ({date}) => {
    // const month = date.toLocaleString('en-US',{month:'long'})
    // const day = date.toLocaleString('en-US',{month:'2-digit'})
    // const year = date.getFullYear()
  const dates = date.split('-')
  return (
    <div className="expense-date" >
    <div className="expense-date__month">{mL[dates[1].replace(/0/g,"")]}</div>
    <div className="expense-date__day">{dates[2]}</div>
    <div className="expense-date__year">{dates[0]}</div>

    </div>
  )
}

export default ExpenseDate