import React from 'react';
import './Game.css';
import QuestionView from './QuestionView.js'
import Bouncer from 'react-data-bouncer'

// on load, set Game and mount menu component
// on start, dismount menu and launch game
// on end, dismount game and mount end (replay => repeat call and do game, quit => base window)
// strucute it out, who is the final source of truth for this Game ?

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: this.props.questions,
      iterator: 0,
    }
  }
  componentDidMount() {
    this.setState({
      questions: this.props.questions,
      iterator: 0,
    })
  }
  

  render() {
    console.log(this.state.questions[2])
    return (
    <div>
      <QuestionView question={this.state.questions} iterator={ this.state.iterator }/>
    </div>
    )
  }
}

export default Game;
