import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2 className="text-lg font-medium text-gray-800 mb-2">Expenses</h2>
      {expenses.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No expenses recorded yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;
