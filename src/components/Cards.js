import React from "react";
import Answers from "./Answers.js";
import decodeHtml from "./helpers/decodeHtml";

const Cards = ({ questions, checkAnswer, count }) => {
  let c = [
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
    c.push({
      question: question.question,
      answers: question.incorrect_answers,
      correctAnswer: question.correct_answer,
      checkAnswer: checkAnswer,
      index: index
    })
  );

  return (
    <div>
      <center className="text-primary">
        <h1>Questions:</h1>
      </center>
      <div className="card-holder">
        <div className="card">
          <div className="card-body">
            <h5 className="card-question">{decodeHtml(c[count].question)}</h5>
            <Answers
              answers={c[count].answers}
              correctAnswer={c[count].correctAnswer}
              checkAnswer={c[count].checkAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
