import { useState } from "react";
import "./App.css";
import UseEffectExample from "./components/UseEffectExample";
import UseStateExample from "./components/UseStateExample";

function App() {
  //in a class component, it will look like this:
  // state = {
  //   counter:0,
  //   isLoading: true,
  //   reservations: []
  // }

  // const[counter, setCounter] = useState(0)
  // const[isLoading, setIsLoading] = useState(true)
  // const [reservation, setReservations] = useState([])

  const [counter, setCounter] = useState(0);
  //counter in this case is the STATE VARIABLE(like a state property in a state object)
  //setCounter is the ONLY WAY to update counter
  return (
    <div className="App">
      <UseEffectExample />
      <UseStateExample />
      <header className="App-header" style={{ flexDirection: "row" }}>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <h3>{counter}</h3>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </header>
    </div>
  );
}

export default App;
