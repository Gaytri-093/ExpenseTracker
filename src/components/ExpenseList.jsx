import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="bg-gray-100 rounded p-4 shadow">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Expenses</h2>
      {expenses.length > 0 ? (
        <ul>
          {expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDelete={onDeleteExpense}
            />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No expenses recorded yet.</p>
      )}
    </div>
  );
};

export default ExpenseList;
