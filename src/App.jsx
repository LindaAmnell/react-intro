import { useState } from "react";
import "./css/App.css";
import "./css/övning456.css";
import FancyButton from "./FancyButton";
import övning456 from "./övning456.jsx";
import HideAndSeak from "./övning3.5.jsx";
function App() {
  //   const [count, setCount] = useState(0);
  return (
    <main>
      <h1> Hello world </h1>
      <p className="exciting"> Min första riktiga React-app. </p>
      <p> Det kommer snabbt bli mer intressant. </p>
      <FancyButton text={"spänning"} />
      <FancyButton text={"Melodrama"} />
      <FancyButton text={"Komedi"} />
      <header>
        <h1> Jams 'R Us </h1>
      </header>
      <h2> Explore our amazing jam collection! </h2>
      <div className="products">
        <JamCard text="Rasberry" />
        <JamCard text="Strawberry" />
        <JamCard text="Banana" />
        <JamCard text="Cherry" />
        <JamCard text="Cinnamon" />
        <JamCard text="Peppermint" />
        <JamCard text="Cardamon" />
        <JamCard text="Licorice" />
        <JamCard text="Garlic" />
        <JamCard text="Potato" />
      </div>
      <section>
        <div className="header2">
          <p>Bibblan</p>
        </div>
        <div>
          <h2>Våra böcker</h2>
          <div className="books">
            <BookCard titel="harry potter" author="J.K. Rowling" />
            <BookCard titel="sagan om ringen" author="J.R.R. Tolkien" />
            <BookCard titel="To Kill a Mockingbird" author="Harper Lee" />
            <BookCard titel="1984" author="George Orwell" />
            <BookCard titel="Pride and Prejudice" author="Jane Austen" />
          </div>
        </div>
      </section>
      <section>
        <p> Räkna med React </p>
        <p>
          {x} + {y} = {x + y}
        </p>
      </section>
      <section>
        <div className="buttons-section">
          <NameChanger />
          <Click />
          <CountClick />
          <CountClick />
          <CountClick />
          <CountClick />
        </div>
      </section>
      <section>
        <HideAndSeak />
        <PressButton />
        <Calculator />
        <Product />
        <Fancy style="#2e86c1" colour="blå" />
        <Fancy style="#A04000" colour="brun" />
        <Fancy style="#839192" colour="grå" />
        <Fancy style="#9b59b6" colour="lila" />
      </section>
      <section>
        <Orderly value={1} /> <br />
        <Orderly value={2} /> <br />
        <Orderly value={3} /> <br />
        <Orderly value={4} /> <br />
        <Orderly value={5} /> <br />
      </section>
    </main>
  );
}

// className="excited-button"
import Orderly from "./10.jsx";
import Fancy from "./3.9.jsx";
import JamCard from "./jamCard.jsx";
import BookCard from "./books.jsx";
import NameChanger from "./övning456.jsx";
export default App;
import Click from "./övning3.2.jsx";
import CountClick from "./övning3.3.jsx";
import PressButton from "./övning3.6.jsx";
import Calculator from "./calculator.jsx";
import Product from "./4.8.jsx";
// JavaScript - ändra inte
const x = 2;
const y = 10;
