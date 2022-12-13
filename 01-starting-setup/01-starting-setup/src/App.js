import ExpenseItem from './components/exprenseItem';

function App() {


  const exprenses= [
    {
      id:"e1",
      title:"Car Insurance",
      amount:216,
      
    },
    {
      id:"e2",
      title:"New Desk",
      amount:450,
      
    },
    {
      id:"e3",
      title:"New TV",
      amount:800,
      
    }

  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <h2>Hello!</h2> 
      <ExpenseItem 
      title={exprenses[0].title}
      amount={exprenses[0].amount}
      date={exprenses[0].date}></ExpenseItem>
        <ExpenseItem 
      title={exprenses[1].title}
      amount={exprenses[1].amount}
      date={exprenses[1].date}></ExpenseItem>
        <ExpenseItem 
      title={exprenses[2].title}
      amount={exprenses[2].amount}
      date={exprenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
