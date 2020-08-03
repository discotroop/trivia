import React from "react";

const Answers = ({ answers }) => {
  return (
    <div>
      {answers.map(answer => {
        return (
          <div>
            <p> {answer.correctAnswer} </p>
            <p> {answer.answer} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Answers;
