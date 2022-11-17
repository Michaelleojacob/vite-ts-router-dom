import { useState } from "react";
import "./counter.css";
import CounterButtons from "../../components/count-buttons/count-btns";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1>Vite + React</h1>
      <div className="card">count is {count}</div>
      <CounterButtons increment={increment} decrement={decrement} />
    </div>
  );
}

export default Counter;
