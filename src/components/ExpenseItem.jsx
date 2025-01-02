import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <li className="flex justify-between items-center py-2">
      <div>
        <p className="text-gray-700 font-medium">{expense.title}</p>
        <p className="text-gray-500 text-sm">{new Date(expense.date).toLocaleDateString()}</p>
      </div>
      <span className="text-gray-900 font-semibold">${expense.amount.toFixed(2)}</span>
    </li>
  );
};

export default ExpenseItem;
