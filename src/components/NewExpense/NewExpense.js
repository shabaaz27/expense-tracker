import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [expCard,setExpCard] =useState(true)
  const saveExpenseHandler = (expenseData) =>{
    const expData = {
      ...expenseData,
      id:Math.random().toString()
    }
    props.onAdd(expData)
    setExpCard(false)
  }
 
  const onCancel= ()=>{
    setExpCard(false)
  }

  return (
    <div className="new-expense">
      {
        expCard &&  <ExpenseForm onSave={saveExpenseHandler} cancel={onCancel}/>
      }
      {
        !expCard &&   <div className="new-expense__actions">
        <button type="button" onClick={()=>setExpCard(true)} >Add New Expense</button>
      </div>
      }
     

    </div>
  )
}

export default NewExpense