import React from "react";
import "./Game.css";
import Cards from "./Cards.js";
import Menu from "./Menu.js";
import EndGame from "./EndGame.js";
import generateKey from "./helpers/GenerateKey.js";

// on load, set Game and mount menu component
// on start, dismount menu and launch game
// on end, dismount game and mount end (replay => repeat call and do game, quit => base window)
// strucute it out, who is the final source of truth for this Game ?

// Show Cards
// ** display only one card at a time
// ** on answerClicked
// ** check if answer correct
// ** add iterator + 1
// ** add score + 1
// ** check for last card
// ** if last card => end
// ** else
// ** remove present card
// ** load next card
// ** if answer wrong
// ** add iterator + 1
// ** check for last card
// ** if last card => end
// ** else
// ** remove present card
// ** load next card

// Game End + Start + Loop
// Game end is really part of the game loop
// on app launch
// ** display menu
// hide card => delay fetch call
// on menu selection submitted
// construct api url
// ** call fetch
// ** hide menu
// ** display card [0]
// on game end
// either hide cards or show all with correct answers ?
// offer play again option => same api call
// new call to api with same string as before
// load cards
// new game option
// hide cards
// hide game end screen
// load menu

// components to extract ?
// question counter at top
// score counte at top
// menu
// subsections of cards

const sampleInput = function (props) {
  return (
    <div> hello </div>
    // <form>
    //   <label for="count"> Count </label>
    //   <select id="count" name="count">
    //     <option value="10"> 10 </option>
    //     <option value="15"> 15 </option>{" "}
    //   </select>
    // </form>
  );
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  render() {
    return (
      <div>
        <div className="top">
          <div className="question-number">
            {this.fetchNewData()} Current Question # {this.state.iterator} /{" "}
            {this.state.questions.length}{" "}
          </div>
          <div className="score">
            {" "}
            Your Score {this.state.score} / {this.state.questions.length}{" "}
            correct
          </div>
        </div>
        <div> {sampleInput} </div>
        <div>{this.dynamicView(this.state.views)}</div>
      </div>
    );
  }

  state = {
    views: "Menu",
    questions: [],
    iterator: 0,
    score: 0
  };

  // functions to handle swapping out views and managing the game loop
  // function name = () => {... code } auto binds this to function
  submit = selector => {
    this.setState({ views: selector });
  };
  dynamicView = selector => {
    switch (selector) {
      case "Menu":
        return <Menu submit={this.submit} view={this.state.views} />;
      case "Questions":
        return (
          <Cards
            questions={this.state.questions}
            count={this.state.iterator}
            checkAnswer={this.checkAnswer}
          />
        );
      case "EndGame":
        return (
          <EndGame
            submit={this.submit}
            view={this.state.views}
            reset={this.reset}
          />
        );
      default:
        return <div> default </div>;
    }
  };
  reset = () => {
    this.setState({
      iterator: 1,
      score: 0
    });
  };
  // Fetch api data and set it to state.
  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(res => res.json())
      .then(data => {
        data.results.forEach(function (question) {
          question.incorrect_answers.push(question.correct_answer);
        });
        this.setState({
          questions: data.results,
          length: data.results.length,
          iterator: 1
        });
      })
      .catch(console.log);
  }

  // Handle checking of answers and check for game ending conditions
  checkAnswer(answer, correctAnswer) {
    if (this.state.iterator === this.state.questions.length) {
      if (answer.trim() === correctAnswer.trim()) {
        this.setState({
          score: this.state.score + 1,
          iterator: 1
        });
      }
      this.setState({
        views: "EndGame"
      });
    } else {
      if (answer.trim() === correctAnswer.trim()) {
        this.setState({
          iterator: this.state.iterator + 1,
          score: this.state.score + 1
        });
      } else {
        this.setState({
          iterator: this.state.iterator + 1
        });
      }
    }
  }
  fetchNewData() {
    let key = generateKey(15, 10, "medium");
    fetch(key)
      .then(res => res.json())
      .then(data => {})
      .catch(console.log);
  }
}

export default Game;
