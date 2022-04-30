import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expense from './components/Expense';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';
const expensesData = [
  {
    id: 'e1',
    title: 'Laptop',
    amount: 93324.12,
    date: "2020-10-10",
  },
]
function App() {
  
  const [data,setData] = useState(expensesData)

  const addExpenseHandler = expenses =>{
     const exp = [...data]
     exp.unshift(expenses)
    setData(exp)
    // setData((exp)=>{
    //   return [ ...exp,expenses]
    // })
    console.log(data)
    console.log(expenses)
  }
  return (
    <div>
      <NewExpense onAdd={addExpenseHandler}/>
      <Expense expenses={data}/>
    </div>
  );
}

export default App;
