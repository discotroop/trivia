import React from 'react'

const Cards = ({questions}) => {
    return (
        <div>
            <center><h1>Questions</h1></center>
            {questions.map((question) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{question.question}</h5>
                        <div className="answers">
                            <button> {question.correct_answer} </button>
                            <button> {question.incorrect_answers[0]} </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cards