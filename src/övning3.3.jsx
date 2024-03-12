import { useState } from "react";
const CountClick = () => {
  const [count, setCount] = useState(0);

  const handleClick1 = () => setCount(count + 1);
  const handleClick2 = () => setCount(count + 5);

  return (
    <section>
      <div className="buttons-section">
        <button className="happy-button" onClick={handleClick1}>
          +1{" "}
        </button>
        <button className="excited-button" onClick={handleClick2}>
          +5
        </button>
        <p className="change-name">Du har klickat {count} gånger</p>
      </div>
    </section>
  );
};
export default CountClick;
