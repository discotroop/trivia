import React from "react";
import decodeHtml from "./helpers/decodeHtml";

// check mark
// http://jsfiddle.net/mirohristov/awayF/473/
// or http://jsfiddle.net/awayF/490/

const AnswerReview = ({ answers, correctAnswer }) => {
  answers.forEach(function (answer) {
    answer = decodeHtml(answer);
    if (answer === correctAnswer) {
      console.log(answer, correctAnswer);
      answer = answer = " &#10004;";
    }
  });
  return (
    <div>
      <div className="review">
        {answers.map(answer => (
          <p> {answer} </p>
        ))}
      </div>
    </div>
  );
};

export default AnswerReview;
