import { useState } from "react";
import Edit from "./Edit";
import { ExpenseListType, ExpenseType } from "../Type";

const ExpenseList = ({ expenseList, setExpenseList }: ExpenseListType) => {
  const [editItem, setEditItem] = useState<ExpenseType>({
    expenseName: "",
    expenseAmount: 0,
    id: 0,
  });

  const handleDelete = (item: ExpenseType) => {
    const filteredExpense = expenseList.filter(
      (expenseItem) => expenseItem.id !== item.id
    );
    setExpenseList(filteredExpense);
  };

  return (
    <div className={`row col-12 col-lg-8 gap-1 d-flex justify-content-center ${expenseList.length === 0 ? "d-none" : ""}`}>
      {expenseList.map((item, index) => (
        <div
          key={index}
          className="col-10 d-flex justify-content-between align-items-center p-2 rounded"
          style={{ backgroundColor: "#9feaec" }}
        >
          <p>
            {item.expenseName} -----&gt; {item.expenseAmount} €
          </p>
          <div>
            <i
              data-bs-toggle="modal"
              data-bs-target="#edit"
              onClick={() => setEditItem(item)}
              className="fa-solid fa-pen-to-square mx-1"
            ></i>
            <i
              className="fa-solid fa-trash"
              onClick={() => handleDelete(item)}
            ></i>
          </div>
        </div>
      ))}
      <Edit editItem={editItem} setEditItem={setEditItem} expenseList={expenseList} setExpenseList={setExpenseList} />
    </div>
  );
};

export default ExpenseList;
