// import React, {useState} from "react"
// // import ExpenseItem1  from "./components/ExpenseItem1";
// import NewExpense from "./components/NewExpense/NewExpense"
// import Expenses1 from "./components/Expenses/Expenses1"

// let DUMMY_EXPENSE=[
// //   {
// //     id: 'e1',
// //     title: 'school fees',
// //     amount: 250,
// //     date: new Date(2025,5,1)
// //   },
// //   {
// //     id: 'e2',
// //     title: 'Book',
// //     amount: 260,
// //     date: new Date(2025,5,10)
// //   },
// //   {
// //     id: 'e3',
// //     title: 'House Rent',
// //     amount: 270,
// //     date: new Date(2025,5,15)
// //   },
// //   {
// //     id: 'e4',
// //     title: 'Food and travel',
// //     amount: 280,
// //     date: new Date(2025,5,20)
// //   },
// ];


// const App=()=> {
//   // let expense_date=new Date(2025,1,15);
//   // let expense_title='School Fees';
//   // let expense_amount=300;

//   // let expenses=[
//   //   {
//   //     id: 'e1',
//   //     title: 'school fees',
//   //     amount: 250,
//   //     date: new Date(2025,5,1)
//   //   },
//   //   {
//   //     id: 'e2',
//   //     title: 'Book',
//   //     amount: 260,
//   //     date: new Date(2025,5,10)
//   //   },
//   //   {
//   //     id: 'e3',
//   //     title: 'House Rent',
//   //     amount: 270,
//   //     date: new Date(2025,5,15)
//   //   },
//   //   {
//   //     id: 'e4',
//   //     title: 'Food and travel',
//   //     amount: 280,
//   //     date: new Date(2025,5,20)
//   //   },
//   // ];

//   const [expenses,setExpenses]= useState(DUMMY_EXPENSE);

//   fetch('http://localhost:5000/expenses').then(
//     response=>{
//       return response.json();
//     }
//   ).then(
//     data=>{
//       console.log(data)
//     }
//   )

//   const addExpenseHandler=(expense)=>{
//     const updatedExpense=[expense,...expenses];
//     setExpenses(updatedExpense);
//     // console.log(expense)
//   }

//   return (
//     <div>
//       <NewExpense onaddExpense={addExpenseHandler}></NewExpense>
//       <Expenses1 item={expenses} />

//     </div>
    
    
//   )
// }

// export default App


import React, { useState, useEffect } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses1 from "./components/Expenses/Expenses1";

let DUMMY_EXPENSE = [];

const App = () => {
  const [expenses, setExpenses] = useState([DUMMY_EXPENSE]);

  function FetchData(){
    fetch("http://localhost:5000/expenses")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // Convert date strings into Date objects
        // const loadedExpenses = data.map((item) => ({
        //   ...item,
        //   date: new Date(item.date),
        // }));
        console.log(data);
        setExpenses(data);
      })
      .catch((error) => {
        console.error("Failed to fetch expenses:", error);
      });
  }

  // Fetch expenses from JSON Server on component mount
  useEffect(() => {
    // fetch("http://localhost:5000/expenses")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Convert date strings into Date objects
    //     // const loadedExpenses = data.map((item) => ({
    //     //   ...item,
    //     //   date: new Date(item.date),
    //     // }));
    //     console.log(data);
    //     setExpenses(data);
    //   })
    //   .catch((error) => {
    //     console.error("Failed to fetch expenses:", error);
    //   });
    FetchData();
  }, []);

  //  Add new expense
  const addExpenseHandler = (expense) => {
    // Optional: POST to JSON Server
    fetch("http://localhost:5000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    }).then(
      (response) =>{
        FetchData();
      }
    );
      // .then((res) => res.json())
      // .then((data) => {
      //   setExpenses((prevExpenses) => [data, ...prevExpenses]);
      // })
      // .catch((error) => {
      //   console.error("Failed to add expense:", error);
      // });
  };
  return (
    <div>
      <NewExpense onaddExpense={addExpenseHandler} />
      <Expenses1 item={expenses} />
    </div>
  );
};

export default App;
