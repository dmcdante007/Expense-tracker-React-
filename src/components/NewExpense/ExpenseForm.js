import React from "react";
import './ExpenseForm.css';

const ExpenseForm = ()=> {
    const titleChange = ()=>{
        console.log('Title Changed!')
    };
    const amountChanged =()=>{
        console.log('Amount channged!')
    }

    const dateChanged= ()=>{
        console.log('Date changed!')
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Expense Title</label>
                <input type="text" onChange={titleChange}/>
            </div>
            <div className="new-expense__control">
                <label>Expense Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChanged}/>
            </div>
            <div className="new-expense__control">
                <label>Expense Date</label>
                <input type="date" min="2019-01-01" max="2025-01-01" onChange={dateChanged}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expesnse</button>
        </div>
    </form>
}

export default ExpenseForm