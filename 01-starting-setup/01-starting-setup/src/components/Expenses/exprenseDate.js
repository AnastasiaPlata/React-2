
import './exprenseDate.css';

function exprenseDate (props){
// props.date -> new Date()
   const month = props.date.toLocaleString("en", {month:"long"});
   const day= props.date.toLocaleString("en", {day:"2-digit"});
   const year= props.date.getFullYear();
   
   
    return  ( 
    <div className="expense-date "> 
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__day">{day}</div>
    <div className="xpense-date__year">{year}</div>
    </div>
    );
}
export default exprenseDate;