import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <h1> Hello world </h1>
      <p className="exciting"> Min första riktiga React-app. </p>
      <p> Det kommer snabbt bli mer intressant. </p>
      <button className="fancy">Jag är festlig</button>
    </main>
  );
}

export default App;
