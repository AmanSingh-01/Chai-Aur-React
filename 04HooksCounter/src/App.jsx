import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);

  function addValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }

  function removeValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>ADD : {counter}</button>
      <br />
      <button onClick={removeValue}>Remove : {counter}</button>
    </>
  );
}

export default App;
