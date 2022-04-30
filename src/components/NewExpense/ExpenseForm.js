import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [title,setTitle] = useState('')
  const [date,setDate] = useState('')
  const [amount,setAmount] = useState('')
  const [cardShow,setCardShow] = useState(true)
  // const [userInput,setUserInput] =useState({
  //   title:"",
  //   date:'',
  //   amount:''
  // }) 

  const titleHandler=(e)=>{
    setTitle((prev)=> e.target.value)
    // setUserInput((prevState)=>{
    //   return {
    //     ...prevState,title:e.target.value
    //   }
    // }) 
     console.log("title===>",title) 
  }
  const amountHandler=(e)=>{
    setAmount(e.target.value)

  } 
  const dateChangeHandler=(e)=>{
      setDate(e.target.value)
  }


  const onSubmitHandler=(e)=>{
    e.preventDefault();

    const expenseData = {
      title:title,
      amount: +amount,
      date:date
    }

    props.onSave(expenseData)
    setCardShow(false)
    props.showExpenseCard(cardShow)
   
  }
  const cancelHandler = ()=>{
    setCardShow(false)
    props.showExpenseCard(cardShow)
  }


  return (
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
           <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleHandler} required/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={amount} min="0.01" step="0.01" onChange={amountHandler} required/>
            </div> 
            <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" value={date} max="2022-12-31" onChange={dateChangeHandler} required/>
            </div>   
        </div>
        <div style={{flexDirection:"row",display:'flex',justifyContent:"flex-end"}}>
        <div className="new-expense__actions">
          <button type="button" onClick={props.cancel}>cancel</button>
        </div> 
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
        </div>    
      </form>
  )
}

export default ExpenseForm