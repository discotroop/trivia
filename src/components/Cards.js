import React from 'react'
import Answers from './Answers.js'

//

const Cards = ({questions}) => {
    return (
        <div>
            <center><h1>Questions</h1></center>
            {questions.map((question) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{question.question}</h5>
                        <Answers answers={question.incorrect_answers} />
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cards