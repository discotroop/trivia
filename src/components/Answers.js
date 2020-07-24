import React from 'react'
import decodeHtml from './helpers/decodeHtml'

const Answers = ({answers, correctAnswer, checkAnswer}) => {
    return (
        <div>
            <div className="answers">
            {answers.map((answer) => (
                <button onClick={(e) => checkAnswer(e.target.textContent, correctAnswer) }> {decodeHtml(answer)} </button>
            ))}
            </div>
        </div>
    )
};

export default Answers