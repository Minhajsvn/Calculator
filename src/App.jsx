import { useState } from "react";
import "./App.css"
import Button from "./Button";

export default function App() {
  const [operand,  setOperand] = useState("");
  const [result, setResult] = useState();
  return (

      <div className="div"> 
        <div className="cardDiv">
          <h1>React Calculator</h1>
          <input className="inputTag" type="text" value={operand}/>
          {result ?<div className="resDiv">{result}</div> : ""}
          <Button setResult={setResult} operand={operand} setOperand={setOperand}/>
        </div>
      </div>

  )
}


