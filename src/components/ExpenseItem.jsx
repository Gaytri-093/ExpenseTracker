import React from "react";

const ExpenseItem = ({ expense }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 border-l-4 border-green-500">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-gray-800 font-bold text-lg">{expense.title}</h3>
          <p className="text-gray-500 text-sm">
            {new Date(expense.date).toLocaleDateString()}
          </p>
          <p className="text-gray-400 text-xs capitalize">{expense.category}</p>
        </div>
        <span className="text-gray-900 font-semibold text-xl">₹{expense.amount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ExpenseItem;
