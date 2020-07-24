import React from 'react'
import Answers from './Answers.js'
import _ from 'lodash'
import decodeHtml from './helpers/decodeHtml'

const Cards = ({questions, checkAnswer}) => {
    return (
        <div>
            <center><h1>Questions</h1></center>
            <div class="card-holder">
            {questions.map((question) => (
                <div className="card">
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