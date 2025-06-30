import react, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm=(props)=>{

    const [enteredTitle,setEnteredTitle]= useState('')
    const [enteredAmount,setEnteredAmount]= useState('')
    const [enteredDate,setEnteredDate]= useState('')

    const titleChangeHandler=(event)=>{
        // console.log(event.target.value)
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler=(event)=>{
        // console.log(event.target.value)
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler=(event)=>{
        // console.log(event.target.value)
        setEnteredDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);


        console.log(expenseData)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__contrl">
                    <label >Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__contrl">
                    <label >Amount</label>
                    <input type="number" value={enteredAmount} min={0.01} step={0.01} onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__contrl">
                    <label >Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;