import React from 'react'
import Answers from './Answers.js'
import _ from 'lodash';

// Might need it's own module
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

const Cards = ({questions}) => {
    console.log(_.unescape('What&#039;s the most common time signature for rock songs?'))
    return (
        <div>
            <center><h1>Questions</h1></center>
            {questions.map((question) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-question">{decodeHtml(question.question)}</h5>
                        <Answers answers={question.incorrect_answers} />
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cards