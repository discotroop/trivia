import React from 'react'
import Answers from './Answers.js'
import _ from 'lodash'
import decodeHtml from './helpers/decodeHtml'

// Might need it's own modu

const Cards = ({questions}) => {
    return (
        <div>
            <center><h1>Questions</h1></center>
            <div class="card-holder">
            {questions.map((question) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-question">{decodeHtml(question.question)}</h5>
                        <Answers answers={question.incorrect_answers} />
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
};

export default Cards