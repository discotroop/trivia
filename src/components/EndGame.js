import React from "react";

const EndGame = props => {
  return (
    <div className="endGame">
      <button
        onClick={() => {
          props.submit(
            "Questions",
            props.state.repeat.count,
            props.state.repeat.category,
            props.state.repeat.difficulty
          );
          props.reset();
        }}
      >
        {" "}
        Play Again!{" "}
      </button>
      <button
        onClick={() => {
          props.submit("Menu");
          props.reset();
        }}
      >
        {" "}
        Main Menu{" "}
      </button>
      {props.view}
    </div>
  );
};

export default EndGame;
