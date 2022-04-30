import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expense = (props) => {
  const {expenses} = props
  const [filteredYear, setFilteredYear] = React.useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense =expenses.filter(i=>i.date.split('-')[0] == filteredYear) 



  return (
    <Card className="expense">   
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       <ExpensesChart expen={filteredExpense}/>
        <ExpensesList filteredExpenses={filteredExpense}/>
    </Card>
  )
}

export default Expense