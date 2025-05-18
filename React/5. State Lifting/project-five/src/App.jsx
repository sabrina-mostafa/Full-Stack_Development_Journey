import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  // Create state
  // Manage state
  // Change state
  // sync withh all children
  const [state, setState] = useState('');

  return (
    <div>
      <Card title="Card1: " name={state} changingFunc={setState} />
      <Card title="Card2: " name={state} changingFunc={setState} />
      <p>I am inside parent component: {state}</p>
    </div>
  );
}

export default App;
