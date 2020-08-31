import React from "react";
import Answers from "./Answers.js";
import decodeHtml from "../helpers/decodeHtml";

const Cards = ({ questions, checkAnswer, count }) => {
  // placeholder, to handle error wherein rendering fails while waiting for questions to be passed
  // there is like a better work around
  let c = [
    {
      question: "test",
      answers: ["test"],
      correctAnswer: "test",
      checkAnswer: function () {
        console.log("sample");
      }
    }
  ];

  questions.map(question =>
    c.push({
      question: question.question,
      answers: question.incorrect_answers,
      correctAnswer: question.correct_answer,
      checkAnswer: checkAnswer,
      type: question.type
    })
  );

  return (
    <div>
      <div className="card-holder">
        <div className="card">
          <div className="card-body">
            <center className="text-info">
              <h1>Question:</h1>
            </center>
            <h5 className="card-question">{decodeHtml(c[count].question)}</h5>
            <Answers
              question={c[count].question}
              answers={c[count].answers}
              correctAnswer={c[count].correctAnswer}
              checkAnswer={c[count].checkAnswer}
              type={c[count].type}
              count={count}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
