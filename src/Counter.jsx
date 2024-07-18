import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      {count <= 10 ? (
        <h4>
          You have clicked the count button {count}{" "}
          {count === 1 ? "time" : "times"}
        </h4>
      ) : (
        <h4>You have clicked the count button more than {count} times</h4>
      )}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
