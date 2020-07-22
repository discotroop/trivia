import React from 'react'
import './QuestionView.css'
import AnswerButton from './AnswerButton.js'

// spin of sub components and pull them in
// make this a class?

// spin out buttons into their own component with handleClick passed down from app
// and values passed in by props

function QuestionView (props) {
    const questions = props.question;
    console.log(props.question[0]);

    function handleAnswer(e) {
        e.preventDefault();
        console.log(e.target.value)
    }
    // function buildButtons() {
    //     questions.forEach(function(question) {
    //         question.incorrect_answers.forEach(function(answers) {
    //             let buttons = answers.map(function(answer) {
    //                 return (
    //                     <div> {answer} </div>
    //                 );
    //             });
    //             console.log(buttons)
    //         })
    //     });
    // }
    function buildButtons() {
        questions.forEach(function(question) {
            console.log(question)
        });
    }
    buildButtons();
    return (
        <div className="Game">
            <div className="Title"> 
                <h1> Trivia Time! too </h1>  
            </div> 
            <div className="Question-Text">
                Who is the Pink Floyd Song 'Shine On You Crazy Diamonds' written about?
            </div>
            <div className="Answers">
                <button value="John Lennon" onClick={(e) => handleAnswer(e)}> John Lennon </button>
                <button value="Syd Barrett" onClick={(e) => handleAnswer(e)}> Syd Barrett </button>
                <button value="David Gilmour" onClick={(e) => handleAnswer(e)}> David Gilmour </button>
                <button value="Floyd" onClick={(e) => handleAnswer(e)}> Floyd </button> 
            </div>
        
        </div>
    )
}

export default QuestionView