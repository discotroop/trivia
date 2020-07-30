import React from "react";
import decodeHtml from "../helpers/decodeHtml";

// check mark
// http://jsfiddle.net/mirohristov/awayF/473/
// or http://jsfiddle.net/awayF/490/

const AnswerReview = ({ answers, correctAnswer }) => {
  // answers.forEach(function (answer) {
  //   answer = decodeHtml(answer);
  //   if (answer === correctAnswer) {
  //     answer = <p className="text-primary"> {answer} </p>;
  //   } else {
  //     answer = <p> {answer} </p>;
  //   }
  // });
  answers.map(function (answer) {
    if (answer === correctAnswer) {
      return (answer = <p> {answer + "correct!"} </p>);
    } else {
      return (answer = <p> {answer} </p>);
    }
  });
  return (
    <div>
      <div className="review">{answers.map(answer => answer)}</div>
    </div>
  );
};

export default AnswerReview;
