// import React, { useState, useEffect } from "react";
// import ExpenseForm from "./components/ExpenseForm";
// import ExpenseList from "./components/ExpenseList";
// import CategoryOverview from "./components/CategoryOverview";

// const App = () => {
//   const [expenses, setExpenses] = useState(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     return savedExpenses ? JSON.parse(savedExpenses) : [];
//   });

//   const addExpense = (expense) => {
//     const updatedExpenses = [...expenses, expense];
//     setExpenses(updatedExpenses);
//   };

//   const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

//   useEffect(() => {
//     localStorage.setItem("expenses", JSON.stringify(expenses));
//   }, [expenses]);

//   const handleDeleteExpense = (id) => {
//     const updatedExpenses = expenses.filter((expense) => expense.id !== id);
//     setExpenses(updatedExpenses);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
//         <h1 className="text-3xl font-extrabold text-center text-black-600 mb-6">Expense Tracker</h1>
//         <div className="text-xl font-semibold mb-6 text-center">
//           Total Expenses: <span className="text-green-500">₹{totalExpenses.toFixed(2)}</span>
//         </div>
//         <ExpenseForm onAddExpense={addExpense} />
//         <CategoryOverview expenses={expenses} />
//         <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense}  />
        
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import CategoryOverview from "./components/CategoryOverview";

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showCategoryOverview, setShowCategoryOverview] = useState(false);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    setShowAddExpense(false); // Hide form after adding expense
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Expense Tracker</h1>
        <div className="text-xl font-semibold mb-6 text-center">
          Total Expenses: <span className="text-green-500">₹{totalExpenses.toFixed(2)}</span>
        </div>
        <div className="flex justify-center gap-10 mb-6">
          <button
            onClick={() => setShowAddExpense((prev) => !prev)}
            className={`px-4 py-2 rounded-lg text-white ${
              showAddExpense ? "bg-red-500" : "bg-purple-500"
            } hover:shadow-lg`}
          >
            {showAddExpense ? "Cancel" : "Add Expense"}
          </button>
          <button
            onClick={() => setShowCategoryOverview((prev) => !prev)}
            className={`px-4 py-2 rounded-lg text-white ${
              showCategoryOverview ? "bg-red-500" : "bg-purple-500"
            } hover:shadow-lg`}
          >
            {showCategoryOverview ? "Hide Categories" : "Show Categories"}
          </button>
        </div>
        {showAddExpense && <ExpenseForm onAddExpense={addExpense} />}
        <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        {showCategoryOverview && <CategoryOverview expenses={expenses} />}
      </div>
    </div>
  );
};

export default App;
