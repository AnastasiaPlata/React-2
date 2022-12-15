import "./exprenseItem.css";
import ExprenseDate from  './exprenseDate';
import Card from '../UI/card';

function ExpenseItem (props){
  // γενικεύει  την μορφή που θα έχει το κάθε κουτάκι (div)
  // στο expense Date -> παίρνουμε την μορφή που θα έχει η ημερομηνία
   
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