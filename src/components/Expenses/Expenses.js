import { useState } from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css"
import Card from "../UI/Card"

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => [
        setFilterYear(selectedYear)
    ]
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {props.items.map(expense =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />)}

        </Card>
    )

}

export default Expenses;