import React from 'react';
import './Game.css';
import QuestionView from './QuestionView.js'
import Bouncer from 'react-data-bouncer'

// on load, set Game and mount menu component
// on start, dismount menu and launch game
// on end, dismount game and mount end (replay => repeat call and do game, quit => base window)
// strucute it out, who is the final source of truth for this Game ?
function TestStatePassing(props) {
  return (
    <div> {props.passed} </div>
  )
}

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
    return (
    <div>
      <div>
        <p> hello </p>
        {console.log(this.state.questions)}
        <TestStatePassing pass={this.state.iterator} />
      </div>
      <Bouncer>
      <QuestionView question={this.props.questions[0]} />
      </Bouncer>
      {this.setState()}
    </div>
    )
  }
}

export default Game;
