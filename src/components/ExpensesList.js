import React from 'react'
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    const {filteredExpenses} =props
    let expenseContent = <h2 style={{textAlign:"center",color:"white"}}>No Expenses Found</h2> ;

    if(filteredExpenses.length ===0){
      return <h2 className="expenses-list__fallback">Found No Expenses</h2>
      
    }
  return (
    <ul className="expenses-list">
        { filteredExpenses?.map((item,i)=><ExpenseItem  
      key={i}
      expenseDate={item.date}  
      expenseTitle={item.title} 
      expenseAmount={item.amount}/>)}
    </ul>
  )
}

export default ExpensesList