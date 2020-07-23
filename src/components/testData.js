    // src/components/contacts.js

    import React from 'react'

    const Questions = ({ questions }) => {
      return (
        <div>
          <center><h1>Contact List</h1></center>
          {questions.map((question) => (
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{question.category}</h6>
                <p class="card-text">{question.difficulty}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Questions