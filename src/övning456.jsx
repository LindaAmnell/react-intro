import { useState } from "react";
const NameChanger = () => {
  const [name, setName] = useState("happy");

  const changeName = (newName) => {
    setName(newName);
  };

  return (
    <section>
      <div className="buttons-section">
        <button
          className="happy-button"
          onClick={() => changeName("I am Happy")}>
          Happy
        </button>
        <button
          className="excited-button"
          onClick={() => changeName("I am Excited")}>
          Excited
        </button>
        <p className="change-name">{name}</p>
      </div>
    </section>
  );
};

export default NameChanger;
