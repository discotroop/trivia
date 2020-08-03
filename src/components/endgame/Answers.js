import React from "react";
import decodeHtml from "../helpers/decodeHtml";

const Answers = ({ answers }) => {
  return (
    <div>
      {answers.map(answer => {
        if (answer.answer.trim() === answer.correctAnswer.trim()) {
          return (
            <div className="review-card">
              <p> {decodeHtml(answer.question)} </p>
              <p className="text-success"> {decodeHtml(answer.answer)} </p>
            </div>
          );
        } else {
          return (
            <div className="review-card">
              <p> {decodeHtml(answer.question)} </p>
              <p>
                {" "}
                Your Answer:{" "}
                <span className="text-danger">
                  {" "}
                  {decodeHtml(answer.answer)}{" "}
                </span>{" "}
              </p>
              <p>
                Correct Answer:{" "}
                <span className="text-info">
                  {" "}
                  {decodeHtml(answer.correctAnswer)}{" "}
                </span>{" "}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Answers;
