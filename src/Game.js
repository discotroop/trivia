import React from 'react';
import logo from './logo.svg';
import './Game.css';
import QuestionView from './QuestionView.js'

// on load, set Game and mount menu component
// on start, dismount menu and launch game
// on end, dismount game and mount end (replay => repeat call and do game, quit => base window)
// strucute it out, who is the final source of truth for this Game ?

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: props.questions,
    }
  }
  render() {
    return <div>
      <div>
        {console.log(this.state.questions)}
      </div>
      <QuestionView />
    </div>
  }
}

export default Game;
