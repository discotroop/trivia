import React from 'react'
import decodeHtml from './decodeHtml'

const Answers = ({answers}) => {
    return (
        <div>
            <div className="answers">
            {answers.map((answer) => (
                <button> {decodeHtml(answer)} </button>
            ))}
            </div>
        </div>
    )
};

export default Answers