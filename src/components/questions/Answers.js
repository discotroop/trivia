import React from "react";
import decodeHtml from "../helpers/decodeHtml";
import shuffleArray from "../helpers/shuffleArray";

const Answers = ({ answers, correctAnswer, checkAnswer, type, count }) => {
  if (type === "multiple") {
    answers = shuffleArray(answers);
  }
  return (
    <div>
      <div className="answers">
        {answers.map((answer, index) => (
          <button
            className="btn btn-secondary"
            onClick={e =>
              checkAnswer(e.target.textContent, correctAnswer, index)
            }
            key={decodeHtml(answer)}
          >
            {decodeHtml(answer)} {index}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Answers;
