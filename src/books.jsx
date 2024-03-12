import { useState } from "react";
const BookCard = (props) => {
  const [isReturned, setIsReturned] = useState(false);
  const [buttonText, setButtonText] = useState("Låna");

  const handleClick = () => {
    if (isReturned) {
      setButtonText("Låna");
    } else {
      setButtonText("Återlämnad");
    }
    setIsReturned(!isReturned);
  };

  return (
    <section className="bookCard">
      <h3>{props.titel}</h3>
      <div className="imagebook"></div>
      <p className="author">{props.author}</p>
      <button
        className={isReturned ? "return" : "buttonBook"}
        onClick={handleClick}>
        {buttonText}
      </button>
    </section>
  );
};

export default BookCard;
