import React from "react";
import decodeHtml from "../helpers/decodeHtml";

// check mark
// http://jsfiddle.net/mirohristov/awayF/473/
// or http://jsfiddle.net/awayF/490/

const AnswerReview = ({ answers, correctAnswer }) => {
  return (
    <div className="review">
      {" "}
      {answers.map(answer => (
        <p> {answer} </p>
      ))}
    </div>
  );
};

export default AnswerReview;
