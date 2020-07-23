    // src/components/contacts.js

    import React from 'react'

    const Questions = ({ questions }) => {


      return (
        <div className="testData">
          {console.log(questions)}
          {questions.map((question) => (
            
            <div>
                {console.log(question.category)}
                hello
                <p> {question.category} </p>
            </div>
          ))}
        </div>
      )
    };

    export default Questions