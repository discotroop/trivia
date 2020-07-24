import React from 'react';
import './Game.css';
import Cards from './Cards.js'

// on load, set Game and mount menu component
// on start, dismount menu and launch game
// on end, dismount game and mount end (replay => repeat call and do game, quit => base window)
// strucute it out, who is the final source of truth for this Game ?

// Show Cards
  // ** display only one card at a time
  // on answerClicked
    // ** check if answer correct
      // ** add iterator + 1
      // ** add score + 1
      // ** check for last card
        // if last card => end
        // else 
          // ** remove present card
          // ** load next card
    // if answer wrong
      // ** add iterator + 1
      // check for last card
        // if last card => end
        // else 
          // ** remove present card
          // ** load next card

// Game End + Start + Loop
  // Game end is really part of the game loop
    // on app launch
      // display menu
      // hide card => delay fetch call
    // on menu selection submitted
      // construct api url
      // call fetch
      // hide menu
      // display card [0]
    // on game end
      // either hide cards or show all with correct answers ?
      // offer play again option => same api call
          // new call to api with same string as before
          // load cards
      // new game option
        // hide cards
        // hide game end screen
        // load menu 

class Game extends React.Component {

  constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this)
        this.state = {
          questions: [],
          iterator: 0,
          score: 0
        }
      }

  render() {
    return (
      <div>
        <div className="top">
          <div className="question-number"> Current Question # {this.state.iterator} / {this.state.questions.length} </div>
          <div className="score"> Your Score {this.state.score} / {this.state.questions.length} </div>
        </div>
        <div className="menu">
          Hi I'm the menu
        </div>
        <div className="card-holder">
          <Cards 
          questions={this.state.questions} 
          count={this.state.iterator} 
          checkAnswer={this.checkAnswer} 
          />
        </div>
      </div>
    )
  }

state = {
    questions: [],
    iterator: 0,
    score: 0,
};

 componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10')
        .then(res => res.json())
        .then((data) => {
          data.results.forEach(function(question) {
            question.incorrect_answers.push(question.correct_answer);
          })
            this.setState(
              { 
                questions: data.results, 
                length: data.results.length,
                iterator: 1
              })
        })
        .catch(console.log)
    }
  checkAnswer(answer, correctAnswer) {
    if(this.state.iterator === this.state.questions.length) {
      console.log('gameover')
      if(answer.trim() === correctAnswer.trim()) {
        this.setState({
          score: this.state.score + 1
        })
      }
    } else {
    if(answer.trim() === correctAnswer.trim()) {
      this.setState({
        iterator: this.state.iterator + 1,
        score: this.state.score + 1
      })
    } else {
      console.log(answer.length, correctAnswer.length)
      this.setState({
        iterator: this.state.iterator + 1,
      })
    }
  }
  }
  toggleMenu() {
    console.log('menu')
  }
}



export default Game;

