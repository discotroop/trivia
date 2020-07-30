import React from "react";
import decodeHtml from "./helpers/decodeHtml";
import shuffleArray from "./helpers/shuffleArray";

const Answers = ({ answers, correctAnswer, checkAnswer, type }) => {
  if (type === "multiple") {
    answers = shuffleArray(answers);
  }
  return (
    <div>
      <div className="answers">
        {answers.map(answer => (
          <button
            className="btn btn-secondary"
            onClick={e => checkAnswer(e, e.target.textContent, correctAnswer)}
            key={decodeHtml(answer)}
          >
            {decodeHtml(answer)}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Answers;
