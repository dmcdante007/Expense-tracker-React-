import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=> {
    const [enteredTitle, newenteredTitle] = useState('');
    const [enteredAmount, newenteredAmount] = useState('');
    const [enteredDate, newenteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate:'',
    // });

    const titleChange = (event)=>{
        newenteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // console.log('Title Changed!')
    };
    const amountChanged =(event)=>{
        newenteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }

    const dateChanged= (event)=>{
        newenteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        newenteredTitle('');
        newenteredAmount('');
        newenteredDate('');


    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Expense Title</label>
                <input type="text" value={enteredTitle} onChange={titleChange}/>
            </div>
            <div className="new-expense__control">
                <label>Expense Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChanged}/>
            </div>
            <div className="new-expense__control">
                <label>Expense Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2025-01-01" onChange={dateChanged}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expesnse</button>
        </div>
    </form>
}

export default ExpenseForm