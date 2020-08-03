import React from "react";
import decodeHtml from "../helpers/decodeHtml";
import shuffleArray from "../helpers/shuffleArray";

const Answers = ({ question, answers, correctAnswer, checkAnswer, type }) => {
  // randomize the order of multiple choice questions
  if (type === "multiple") {
    answers = shuffleArray(answers);
  }
  return (
    <div className="answers">
      {answers.map(answer => (
        <button
          className="btn btn-secondary"
          onClick={e =>
            checkAnswer(e.target.textContent, correctAnswer, question)
          }
          key={decodeHtml(answer)}
        >
          {decodeHtml(answer)}
        </button>
      ))}
    </div>
  );
};

export default Answers;
