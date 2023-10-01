import { useState } from "react";
import { BudgetType } from "../Type";

const Budget = ({ expenseList }: BudgetType) => {
  const [budget, setBudget] = useState<number | null>(null);
  const [toggle, setToggle] = useState<boolean>(true);
  let total: number = expenseList.reduce((a, b) => a + b.expenseAmount, 0);

  return (
    <>
      <h1 className="text-center mb-3" style={{ color: "#004e92" }}>
        My Budget Planner
      </h1>
      <div className="container">
        <div className="row justify-content-center gap-3">
          <div
            className="col-12 col-lg-4 d-flex justify-content-center rounded p-2 mb-2 gap-1"
            style={{ color: "#0d511d", backgroundColor: "#9feaec" }}
          >
            <input
              className="form-control w-75"
              disabled={!toggle}
              type="number"
              placeholder="Type your budget here!"
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <button
              className="btn btn-primary w-25"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? "Save" : "Edit"}
            </button>
          </div>
          <div
            className="col-12 col-lg-4 rounded p-2 align-items-center mb-2"
            style={{ color: "#0d511d", backgroundColor: "#adfabf" }}
          >
            <p className="h5">Remaining: {budget !== null ? budget - total : "0"} €</p>
          </div>
          <div
            className="col-12 col-lg-4 rounded p-2 align-items-center"
            style={{ color: "#b00f3f", backgroundColor: "#ffa4b7" }}
          >
            <p className="h5">Total spent so far: {total} €</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Budget;
