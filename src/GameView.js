import React from 'react'
import './GameView.css'

// spin of sub components and pull them in

function GameView () {
    return (
        <div className="Game">
            <div className="Title"> 
            <h1> Trivia Time </h1>  
                </div> 
            <div className="Question-Text">
                Who is the Pink Floyd Song 'Shine On You Crazy Diamonds' written about?
            </div>
            <div className="Answers">
                <button> John Lennon </button>
                <button> Syd Barrett </button>
                <button> David Gilmour </button>
                <button> Floyd </button> 
            </div>
        
        </div>
    )
}

export default GameView