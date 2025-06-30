import React from 'react';
import './Expenses1.css';
import ExpenseItem1 from './ExpenseItem1';
import Card from '../UI/Card';
const Expenses1 = (props) => {
    return (
        <Card className='expenses1'>

            {
                props.item.map(
                    (expense) => 
                        <ExpenseItem1
                            key={expense.id}
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount} />
                    
                )
            }

            {/* <ExpenseItem1
                date={props.item[0].date}
                title={props.item[0].title}
                amount={props.item[0].amount} />




            <ExpenseItem1
                date={props.item[1].date}
                title={props.item[1].title}
                amount={props.item[1].amount} />




            <ExpenseItem1
                date={props.item[2].date}
                title={props.item[2].title}
                amount={props.item[2].amount} />




            <ExpenseItem1
                date={props.item[3].date}
                title={props.item[3].title}
                amount={props.item[3].amount} /> */}


        </Card>
    )
}

export default Expenses1;