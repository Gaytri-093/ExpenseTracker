import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import CategoryOverview from "./components/CategoryOverview";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-extrabold text-center text-black-600 mb-6">Expense Tracker</h1>
        <div className="text-xl font-semibold mb-6 text-center">
          Total Expenses: <span className="text-green-500">₹{totalExpenses.toFixed(2)}</span>
        </div>
        <ExpenseForm onAddExpense={addExpense} />
        <CategoryOverview expenses={expenses} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
};

export default App;
