import React from 'react';
import './Game.css';
import QuestionView from './QuestionView.js'
import Bouncer from 'react-data-bouncer'
import Questions from './testData.js'

// on load, set Game and mount menu component
// on start, dismount menu and launch game
// on end, dismount game and mount end (replay => repeat call and do game, quit => base window)
// strucute it out, who is the final source of truth for this Game ?

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      questions: [],
      iterator: 0,
    }
  }
  render() {
    return (
    <div>
      hello
      <Questions questions={this.state.questions} />
    </div>
    )
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  componentDidMount() {
    let Questions = [];
    fetch('https://opentdb.com/api.php?amount=10')
    .then(response => response.json())
    .then(data => {
    data.results.forEach(function(question) {
      console.log(question)
      // consolidate correct answer into incorrect_answers array
      question.incorrect_answers.push(question.correct_answer);
      // shuffle the order of the incorrect_answers array to randomize order.
      question.incorrect_answers = this.shuffleArray(question.incorrect_answers);
      // add formatted question to Questions array
      Questions.push(question);
    })
  })
  // handle errors
  .catch(function (err) {
    console.log(err);
  });
    this.setState({
      questions: Questions,
      iterator: 0,
    })
  }
  
}

export default Game;

// randomize questions order
