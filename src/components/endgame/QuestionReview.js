import React from "react";
import AnswerReview from "./AnswerReview";

const QuestionReview = ({ questions }) => {
  let review = [
    {
      question: "test",
      answers: ["test"],
      correctAnswer: "right",
      checkAnswer: function () {
        console.log("sample");
      }
    }
  ];

  questions.map((question, index) =>
    review.push({
      question: question.question,
      answers: question.incorrect_answers,
      correctAnswer: question.correct_answer,
      type: question.type
    })
  );

  return (
    <div>
      hello
      {review.map(r => (
        <div className="reviewCard">
          <p> {r.question} </p>
          <AnswerReview answers={r.answers} correctAnswer={r.correctAnswer} />
          <p className="text-success"> {r.correctAnswer} </p>{" "}
        </div>
      ))}
    </div>
  );
};

export default QuestionReview;
