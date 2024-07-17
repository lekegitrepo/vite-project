import { useState } from "react";
import "./App.css";

function ChangeColor() {
  const [color, setColor] = useState("black");
  return (
    <>
      <p style={{ color }}>Hello World!!</p>
      <button onClick={() => setColor("red")}>Change Color</button>
    </>
  );
}

export default ChangeColor;
