import "./exprenseItem.css";

function ExpenseItem (props){
    const options={
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    const date = new Date().toLocaleString('en',options)

    return  <div className="expense-item ">
       <div>{date}</div>
        <div> 
        <div><h2>{props.date}</h2></div>
        </div>
        <div className="expense-item__description">
            <p><strong>{props.title}</strong></p>
            <div className="expense-item__price ">${props.amount}</div>
            </div>
        
        </div> 
};
export default ExpenseItem ; 