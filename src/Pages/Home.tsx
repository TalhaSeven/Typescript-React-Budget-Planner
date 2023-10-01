import { useState } from "react";
import { ExpenseType } from "../Type";
import AddExpenses from "../components/AddExpenses";
import Budget from "../components/Budget";
import ExpenseList from "../components/ExpenseList";
import "./home.css";


const Home = () => {
   const [expense, setExpense] = useState<ExpenseType>({
    expenseName:"",
    expenseAmount:0,
    id: Date.now()
   })

   const [expenseList, setExpenseList] = useState<ExpenseType[] | []>([])
    
  return (
    <div className='mx-auto col col-sm-4 col-md-6 col-lg-12 contentWrapper rounded px-5 py-5'>
      <Budget expenseList={expenseList} />
      <div className='d-flex flex-column flex-lg-row gap-1 mt-1'>
        <AddExpenses expense={expense} setExpense={setExpense} expenseList={expenseList} setExpenseList={setExpenseList}/>
        <ExpenseList expenseList={expenseList} setExpenseList={setExpenseList}/>
      </div>
    </div>
  )
}

export default Home
