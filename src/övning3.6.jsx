import { useState } from "react";

const PressButton = () => {
  const [colour, setcolour] = useState(0);

  return (
    <>
      <button
        onClick={() => setcolour(1)}
        className={colour === 1 ? "happy-button" : "none"}>
        Ett
      </button>
      <button
        onClick={() => setcolour(2)}
        className={colour === 2 ? "happy-button" : "none"}>
        Två
      </button>
      <button
        onClick={() => setcolour(3)}
        className={colour === 3 ? "happy-button" : "none"}>
        Tre
      </button>
      <button
        onClick={() => setcolour(4)}
        className={colour === 4 ? "happy-button" : "none"}>
        Fyra
      </button>
    </>
  );
};

export default PressButton;
