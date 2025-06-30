import react from "react";

import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {


    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        // console.log(enteredExpenseData)

        props.onaddExpense(expenseData);

        console.log(expenseData)
    };


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>


        </div>
    )
}

export default NewExpense;