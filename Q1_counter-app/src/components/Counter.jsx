import { useState } from "react";
import Button from "./Button";

function Counter() {

  const [count, setCount] = useState(0);

  const MIN = 0;
  const MAX = 10;

  const increment = () => {
    if (count < MAX) {
      setCount(count + 1);
    } else {
      alert("Maximum limit reached");
    }
  };

  const decrement = () => {
    if (count > MIN) {
      setCount(count - 1);
    } else {
      alert("Minimum limit reached");
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter: {count}</h2>

      <Button label="Increment" onClick={increment} />
      <Button label="Decrement" onClick={decrement} />
      <Button label="Reset" onClick={reset} />

      <p>Min: {MIN} | Max: {MAX}</p>
    </div>
  );
}

export default Counter;