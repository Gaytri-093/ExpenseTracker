import React from "react";

const CategoryOverview = ({ expenses }) => {
  const categoryTotals = {};
  expenses.forEach(({ category, amount }) => {
    categoryTotals[category] = (categoryTotals[category] || 0) + amount;
  });

  return (
    <div className="mb-2 mt-4">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Category Overview</h2>
      {Object.keys(categoryTotals).length > 0 ? (
        <ul className="divide-y divide-gray-300">
          {Object.entries(categoryTotals).map(([category, total]) => (
            <li key={category} className="flex justify-between py-3">
              <span className="capitalize text-gray-700 font-medium">{category}</span>
              <span className="text-gray-900 font-semibold">₹{total.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No expenses to display.</p>
      )}
    </div>
  );
};

export default CategoryOverview;
