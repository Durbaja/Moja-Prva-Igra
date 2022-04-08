import React from "react";

const Highscore = ({ highscore }) => {
  return (
    <ul className="UL-style">
      {highscore.map((element, index) => {
        return <li key={index}>Trenutni highscore je: {element}</li>;
      })}
    </ul>
  );
};

export default Highscore;
