// import React from "react";

// const ExpenseItem = ({ expense, onDelete }) => {
//   return (
//     <div className="bg-white rounded shadow p-4 mb-4 border-l-4 border-green-500">
//       <div className="flex justify-between items-center">
//         <div>
//           <h3 className="text-gray-800 font-bold text-lg">{expense.title}</h3>
//           <p className="text-gray-500 text-sm">
//             {new Date(expense.date).toLocaleDateString()}
//           </p>
//           <p className="text-gray-400 text-xs capitalize">{expense.category}</p>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-gray-900 font-semibold text-xl">
//             ₹{expense.amount.toFixed(2)}
//           </span>
//           <button
//             onClick={() => onDelete(expense.id)}
//             className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseItem;

import React from "react";

const ExpenseItem = ({ expense, onDelete }) => {
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
        <div className="flex items-center gap-2">
          <span className="text-gray-900 font-semibold text-xl">
            ₹{expense.amount.toFixed(2)}
          </span>
          <button
            onClick={() => onDelete(expense.id)}
            className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
