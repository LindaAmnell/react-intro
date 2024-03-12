import React from "react";

const Orderly = ({ value }) => {
  const getOrderlySuffix = (number) => {
    if (number === 1) {
      return "st";
    } else if (number === 2) {
      return "nd";
    } else if (number === 3) {
      return "rd";
    } else {
      return "th";
    }
  };

  return (
    <span>
      {value}
      {getOrderlySuffix(value)}
    </span>
  );
};

export default Orderly;
