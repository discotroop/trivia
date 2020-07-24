import React from 'react'
import Answers from './Answers.js'
import _ from 'lodash'
import decodeHtml from './helpers/decodeHtml'


const Cards = ({questions, checkAnswer, count}) => {
    let c = [
        {
            question: "test",
            answer: ["test"],
            correctAnswer: "right",
            checkAnswer: "hllo"
        }
    ];

    questions.map((question, index) => (
        c.push({
            question: question.question,
            answers: question.incorrect_answers,
            correctAnswer: question.correct_answer,
            checkAnswer: checkAnswer,
        })
    ))
    console.log("c", c[count])
    
    return (
        <div>
            <div>
                <p> {c[count].question}</p>
            </div>
            <center><h1>Questions</h1></center>
            <div className="card-holder">
            {questions.map((question, index) => (
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-question">{decodeHtml(question.question)}</h5>
                        <Answers 
                        answers={question.incorrect_answers} 
                        correctAnswer={question.correct_answer}
                        checkAnswer={checkAnswer}
                        />
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
};

export default Cards