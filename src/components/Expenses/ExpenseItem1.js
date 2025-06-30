import react from 'react';

import './ExpenseItem1.css'


// function ExpenseItem1(){
//     return(
//         <div className='expense-item1'>
//             <div>January 15 2025</div>
//             <div className='expense-item1__description'>
//                 <h2>Car Insurance</h2>
//                 <div className='expense-item1__price'>$200</div>
//             </div>
//         </div>
//     )
// }

// function ExpenseItem1(){
//     let title='Car Insurance'
//     return(
//         <div className='expense-item1'>
//             <div>January 15 2025</div>
//             <div className='expense-item1__description'>
//                 <h2>{title}</h2>
//                 <div className='expense-item1__price'>$200</div>
//             </div>
//         </div>
//     )
// }

// function ExpenseItem1(props){

//     return(
//         <div className='expense-item1'>
//             <div>{props.date.toISOString()}</div>
//             <div className='expense-item1__description'>
//                 <h2>{props.title}</h2>
//                 <div className='expense-item1__price'>${props.amount}</div>
//             </div>
//         </div>
//     )
// }

// function ExpenseItem1(props){
//     const month=props.date.toLocaleString('en-US',{month:'long'});
//     let year=props.date.getFullYear();
//     const day=props.date.toLocaleString('en-US',{day:'2-digit'});
//     return(
//         <div className='expense-item1'>
//             <div>
//                 <div>{month }</div>
//                 <div>{year }</div>
//                 <div>{day }</div>
//             </div>
//             <div className='expense-item1__description'>
//                 <h2>{props.title}</h2>
//                 <div className='expense-item1__price'>${props.amount}</div>
//             </div>
//         </div>
//     )
// }

// ******* Multiple Component*********//

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem1=(props)=> {

    // return(
    //     <div className='expense-item1'>
    //         <ExpenseDate date={props.date} />
    //         <div className='expense-item1__description'>
    //             <h2>{props.title}</h2>
    //             <div className='expense-item1__price'>${props.amount}</div>
    //         </div>
    //     </div>
    // )

    

    

    return (
        <Card className='expense-item1'>
            <ExpenseDate date={new Date(props.date)} />
            <div className='expense-item1__description'>
                
                <h2>{props.title}</h2>
                <div className='expense-item1__price'>${props.amount}</div>
            </div>
            
            

        </Card>
    )
}

export default ExpenseItem1;
