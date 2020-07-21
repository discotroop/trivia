import React from 'react'
import './GameView.css'

// spin of sub components and pull them in
// make this a class?

// spin out buttons into their own component with handleClick passed down from app
// and values passed in by props

function GameView () {
    function handleAnswer(e) {
        e.preventDefault();
        console.log(e.target.value)
    }
    return (
        <div className="Game">
            <div className="Title"> 
            <h1> Trivia Time! </h1>  
                </div> 
            <div className="Question-Text">
                Who is the Pink Floyd Song 'Shine On You Crazy Diamonds' written about?
            </div>
            <div className="Answers">
                <button value="John Lennon" onClick={(e) => handleAnswer(e)}> John Lennon </button>
                <button> Syd Barrett </button>
                <button> David Gilmour </button>
                <button> Floyd </button> 
            </div>
        
        </div>
    )
}

export default GameView