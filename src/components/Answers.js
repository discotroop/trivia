import React from 'react'

const Answers = ({answers}) => {
    return (
        <div>
            <div className="answers">
            {answers.map((answer) => (
                <button> {answer} </button>
            ))}
            </div>
        </div>
    )
};

export default Answers