import Exprenses from "./components/Expenses/exprenses";


function App() {


  const exprenses= [
    {
      id:"e1",
      title:"Car Insurance",
      amount:216,
      date:new Date(2020,7,14)
    },
    {
      id:"e2",
      title:"New Desk",
      amount:450,
      date:new Date(2020,8,19)
      
    },
    {
      id:"e3",
      title:"New TV",
      amount:800,
      date:new Date(2021,8,14)
      
    }

  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <h2>Hello!</h2> 
      <Exprenses items={exprenses}/>
        </div>
    
  );
}

export default App;
