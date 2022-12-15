import "./exprenseItem.css";
import ExprenseDate from  './exprenseDate';
import Card from '../UI/card';

function ExpenseItem (props){
    return ( 
    <Card className="expense-item ">
      <ExprenseDate date={props.date}/>
        <div className="expense-item__description">
            <p><strong>{props.title}</strong></p>
            <div className="expense-item__price ">${props.amount}</div>
            </div>
        
        </Card> 
        );
}
export default ExpenseItem ; 