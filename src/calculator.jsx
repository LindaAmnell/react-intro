import { useState } from "react";

const Calculator = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(count - 5)}>-5</button>
      <button onClick={() => setCount(count * 2)}>*2</button>
      <button onClick={() => setCount(count / 2)}>/2</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p>{count}</p>
    </div>
  );
};

export default Calculator;
