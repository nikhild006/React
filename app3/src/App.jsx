import { useState } from "react";
import "./App.css";
function App(){
  let [a,changeA]=useState(0);
  
  function handleIncrement(){
    changeA(a+1);
  }
  function handleDecrement(){
    changeA(a-1);
  }
  function handleReset(){
    changeA(0);
  }
  return(
    <div className="text-center">
      <h1>Set Count</h1>
      <h2>{a}</h2>
      <button className="btn btn-success" onClick={handleIncrement}>+</button>
      <button className="btn btn-warning"onClick={handleReset}>Reset</button>
      <button className="btn btn-danger"onClick={handleDecrement}>-</button>
    </div>
  )
}
export default App;