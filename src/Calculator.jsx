import { useState } from "react";

function Calculator() {
  const [number, setNumberValue] = useState({
    firstNumber: 0,
    secondNumber: 0,
    total: 0,
  });

  const inputChanged = (event) => {
    setNumberValue({ ...number, [event.target.name]: event.target.value });
  };

  const addNumbers = () => {
    setNumberValue({
      ...number,
      total: Number(number.firstNumber) + Number(number.secondNumber),
    });
  };

  const subtractNumbers = () => {
    setNumberValue({
      ...number,
      total: Number(number.firstNumber) - Number(number.secondNumber),
    });
  };

  return (
    <>
      <p>
        Result = <span>{number.total}</span>
      </p>
      <input
        value={number.firstNumber}
        name="firstNumber"
        onChange={inputChanged}
      />
      <input
        value={number.secondNumber}
        name="secondNumber"
        onChange={inputChanged}
      />
      <button onClick={addNumbers}>+</button>
      <button onClick={subtractNumbers}>-</button>
    </>
  );
}

export default Calculator;

// function App() {
//   const [numA, setNumA ] = useState(0);
//   const [numB, setNumB ] = useState(0);
//   const [result, setResult] = useState(0);

//   const inputChangedA = (event) => {
//     setNumA(event.target.value);
//   }

//   const inputChangedB = (event) => {
//     setNumB(event.target.value);
//   }

//   const calcSum = () => {
//     setResult(Number(numA) + Number(numB))
//   }

//   const calcSub = () => {
//     setResult(Number(numA) - Number(numB))
//   }

//   return (
//     <>
//       <p>Result = {result}</p>
//       <input value={numA} onChange={inputChangedA} />
//       <input value={numB} onChange={inputChangedB} />
//       <button onClick={calcSum}>+</button>
//       <button onClick={calcSub}>-</button>
//     </>
//   );
// }

// export default App;
