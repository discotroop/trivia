import React from "react";
import Answers from "./Answers";

const EndGame = props => {
  return (
    <div className="endGame">
      <div className="end-game-info">
        <h1 className="text-primary"> Game Over! </h1>
        <h3 className="text-secondary">
          {" "}
          Your Score: {props.state.score} / {props.state.questions.length}{" "}
        </h3>
      </div>
      <div className="end-buttons">
        <button
          className="btn btn-primary"
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
          className="btn btn-primary"
          onClick={() => {
            props.submit("Menu");
            props.reset();
          }}
        >
          {" "}
          Main Menu{" "}
        </button>
      </div>
      <div className="question-review">
        <Answers answers={props.state.answers} />
      </div>
      <div className="end-buttons">
        <button
          className="btn btn-primary"
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
          className="btn btn-primary"
          onClick={() => {
            props.submit("Menu");
            props.reset();
          }}
        >
          {" "}
          Main Menu{" "}
        </button>
      </div>
    </div>
  );
};

export default EndGame;
