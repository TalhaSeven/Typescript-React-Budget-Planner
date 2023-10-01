import { AddExpenseType } from "../Type";

const AddExpenses = ({
  expense,
  setExpense,
  expenseList,
  setExpenseList,
}: AddExpenseType): JSX.Element => {
  const handleAdd = () => {
    setExpense({ ...expense, id: new Date().getTime() });
    setExpenseList([...expenseList, expense]);
    setExpense({ expenseName: "", expenseAmount: 0, id: Date.now() });
  };
  return (
    <div className="col-12 col-md-8 col-lg-6 mx-auto p-3 rounded">
      <div className="mb-3">
        <label htmlFor="add" className="form-label">
          Expense Name
        </label>
        <input
          className="form-control"
          type="text"
          id="add"
          onChange={(e) =>
            setExpense({ ...expense, expenseName: e.target.value })
          }
          value={expense.expenseName || ""}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cost" className="form-label">
          Amount
        </label>
        <input
          className="form-control"
          type="number"
          id="cost"
          value={expense.expenseAmount || ""}
          onChange={(e) =>
            setExpense({ ...expense, expenseAmount: Number(e.target.value) })
          }
        />
      </div>
      <button className="btn btn-primary w-100" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddExpenses;