import React from 'react'

// spin of sub components and pull them in

function GameView () {
    return (
        <div className="Game">
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