import { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"
import Card from "../UI/Card"

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('')

    const filterChangeHandler = (selectedYear) => [
        setFilterYear(selectedYear)
    ]

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    let expensesContent = <p>No Expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    }
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {expensesContent}
        </Card>
    )

}

export default Expenses;