import React from "react";

const Answers = ({ answers }) => {
  return (
    <div>
      {answers.map(answer => {
        console.log(typeof answer.answer);
        console.log(typeof answer.correctAnswer);
        if (answer.answer.trim() === answer.correctAnswer.trim()) {
          console.log(answer.answer);
          return (
            <div>
              <p className="text-primary"> {answer.correctAnswer} </p>
              <p className="text-primary"> {answer.answer} </p>
            </div>
          );
        } else {
          return (
            <div>
              <p> {answer.correctAnswer} </p>
              <p> {answer.answer} </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Answers;
