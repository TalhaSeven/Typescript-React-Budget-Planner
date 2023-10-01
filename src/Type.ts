export type ExpenseType = {
    expenseName:string,
    expenseAmount:number,
    id: Number
}

export type AddExpenseType = {
    expense:ExpenseType,
    setExpense:React.Dispatch<React.SetStateAction<ExpenseType>>
    expenseList:ExpenseType[],
    setExpenseList:React.Dispatch<React.SetStateAction<ExpenseType[]>>
}

export type ExpenseListType = {
    expenseList:ExpenseType[],
    setExpenseList:React.Dispatch<React.SetStateAction<ExpenseType[]>>
}

export type BudgetType = {
    expenseList:ExpenseType[]
}

export type EditType = {
    editItem:ExpenseType,
    setEditItem:React.Dispatch<React.SetStateAction<ExpenseType>>,
    expenseList:ExpenseType[],
    setExpenseList:React.Dispatch<React.SetStateAction<ExpenseType[]>>
}
