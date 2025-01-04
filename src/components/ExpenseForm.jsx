import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("groceries");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    onAddExpense({
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
      category,
    });

    setTitle("");
    setAmount("");
    setDate("");
    setCategory("groceries");
  };

  return (
    <form className="mb-8 bg-gray-100 rounded-lg p-4 shadow" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          placeholder="Enter expense title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          placeholder="Enter expense amount"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
        >
          <option value="groceries">Groceries</option>
          <option value="entertainment">Entertainment</option>
          <option value="transportation">Transportation</option>
          <option value="utilities">Utilities</option>
          <option value="others">Others</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
