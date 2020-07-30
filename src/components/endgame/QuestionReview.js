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
  console.log(review);

  return (
    <div>
      hello
      {review.map(r => (
        <div className="reviewCard">
          <p> {r.question} </p>
          <AnswerReview answers={r.answers} correctAnswer={r.correctAnswer} />
          {r.correctAnswer}
        </div>
      ))}
    </div>
  );
};

export default QuestionReview;
