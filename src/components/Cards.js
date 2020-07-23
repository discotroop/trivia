import React from 'react'

const Cards = ({questions}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {questions.map((question) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{question.type}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{question.category}</h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Cards