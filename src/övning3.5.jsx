import { useState } from "react";

const HideAndSeak = () => {
  const [name, setName] = useState("");

  const changeName = (newName) => {
    setName(newName);
  };

  return (
    <>
      <button
        className="happy-button"
        onClick={() => changeName("Jag ska växla mellan synlig och osynlig")}>
        Visa
      </button>
      <button className="happy-button" onClick={() => changeName("")}>
        Dölj
      </button>
      <p>{name}</p>
    </>
  );
};

export default HideAndSeak;
