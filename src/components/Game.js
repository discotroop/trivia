import React from "react";
import "./Game.css";
import Cards from "./questions/Cards.js";
import Menu from "./menu/Menu.js";
import EndGame from "./endgame/EndGame.js";
import generateKey from "./helpers/GenerateKey.js";

// add shuffle array to questions

// on game end
// either hide cards or show all with correct answers ?

// components to extract ?
// question counter at top ?
// score counte at top ?
// menu
// subsections of cards

// Bells and whistles:
// Nice CSS
// Some sort of pause + color coding between questions, indicate write or wrong

// fix card so t/f always good in the same order
// fix cards so shuffleArray is called on questions
// add pause between items loading

// I need to spin off more / smaller components, the division of responsibility, is breaking things down, I think
// answer buttons need to be classes + have state to do custom styling,
// really maybe they should all have state ?
// also add more subdirectories to keep things clean

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.bumpIterator = this.bumpIterator.bind(this);
  }
  render() {
    return (
      <div className="temp">
        <div className="game-container">
          {/* <div className="top">
            <div className="question-number">
              {this.state.questions.length}{" "}
            </div>
            <div className="score">
              {" "}
              Your Score {this.state.score} / {this.state.questions.length}{" "}
              correct
            </div>
          </div> */}
          <div className="bg-light card-container">
            {this.dynamicView(this.state.views)}
          </div>
        </div>
      </div>
    );
  }

  state = {
    views: "Menu",
    questions: [],
    answers: [],
    iterator: 0,
    score: 0,
    repeat: {
      category: 10,
      count: 10,
      difficulty: "easy"
    }
  };

  // functions to handle swapping out views and managing the game loop
  // function name = () => {... code } auto binds this to function
  submit = (selector, count, category, difficulty) => {
    this.fetchNewData(count, category, difficulty);
    this.setState({
      views: selector,
      repeat: {
        count: count,
        category: category,
        difficulty: difficulty
      }
    });
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
            repeat={this.state.repeat}
            state={this.state}
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
  bumpIterator() {
    this.setState({
      iterator: this.state.iterator + 1
    });
  }
  // Handle checking of answers and check for game ending conditions

  // NEED to PASS players ANSWERS into STATE here, so they can be used for REVIEW

  // use index on shallow copy of questions made using slice()

  // or push {answer, correctAnswer} into answers array then compare and return them ?
  // answers.map(answer) =. {
  // if (answer.answer === correctAnswer ) { return <p green> answer </p> }
  // else {
  // return {<p red > answer </p> <p green> correct answer </p> }
  // }
  // }

  // would that work ?
  checkAnswer(answer, correctAnswer, index) {
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
          score: this.state.score + 1
        });
        this.bumpIterator();
      } else {
        this.bumpIterator();
      }
    }
    let c = this.state.answers.slice();
    c.push(index);
    this.setState({
      answers: c
    });
    console.log(this.state.answers);
  }
  fetchNewData(count, category, difficulty) {
    let key = generateKey(count, category, difficulty);
    fetch(key)
      .then(res => res.json())
      .then(data => {
        data.results.forEach(function (question) {
          if (question.type === "boolean") {
            question.incorrect_answers = ["True", "False"];
          } else {
            question.incorrect_answers.push(question.correct_answer);
          }
          question.playerAnswer = "";
        });
        this.setState({
          questions: data.results,
          length: data.results.length,
          iterator: 1
        });
      })
      .catch(console.log);
  }
}

export default Game;
