import { useState } from "react";
const Click = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  if (count === 0) {
    return (
      <div>
        <button onClick={handleClick}> Klicka här </button>
        <p> Du har inte klickat några gånger. </p>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={handleClick}> Klicka här </button>
        <p> Du har klickat {count} gånger. </p>
      </div>
    );
  }
};
export default Click;
