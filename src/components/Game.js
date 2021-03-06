import React from "react";
import "./Game.css";
import Cards from "./questions/Cards.js";
import Menu from "./menu/Menu.js";
import EndGame from "./endgame/EndGame.js";
import generateKey from "./helpers/GenerateKey.js";

class Game extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.bumpIterator = this.bumpIterator.bind(this);
  }
  // possible method to handle errors
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  // or
  // https://reactjs.org/docs/error-boundaries.html

  render() {
    return (
      <div className="main">
        <div className="game-container">
          <div className="bg-light card-container">
            {this.dynamicView(this.state.views)}
          </div>
        </div>
      </div>
    );
  }

  // set initial state / default values
  state = {
    views: "Menu",
    questions: [],
    answers: [],
    iterator: 0,
    score: 0,
    repeat: {
      category: 10,
      count: 10,
      difficulty: ""
    }
  };

  // handle start button and play again button requests
  submit = (selector, count, category, difficulty) => {
    if (count) {
      this.fetchNewData(count, category, difficulty);
      this.setState({
        views: selector,
        repeat: {
          count: count,
          category: category,
          difficulty: difficulty
        }
      });
    } else {
      this.setState({
        views: selector
      });
    }
  };

  // handle switching between main menu, questions view and end game menu
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
  // reset state to avoid error when playing again
  reset = () => {
    this.setState({
      iterator: 1,
      score: 0,
      answers: []
    });
  };
  bumpIterator() {
    this.setState({
      iterator: this.state.iterator + 1
    });
  }

  // check for correct answers and handle ending game on last question
  checkAnswer(answer, correctAnswer, question) {
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
    // push questions, answers and correct answers into state.answers for
    // easy access for review at end of game
    let c = this.state.answers;
    c.push({
      question: question,
      answer: answer,
      correctAnswer: correctAnswer
    });
    this.setState({
      answers: c
    });
  }

  // generate custom api key, call for data and populate game.state with questions
  fetchNewData(count, category, difficulty) {
    let key = generateKey(count, category, difficulty);
    debugger;
    fetch(key)
      .then(res => res.json())
      .then(data => {
        if (data.results.length < 10) {
          console.log("whoops!");
          this.handleFetchError();
        } else {
          console.log(data.results);
        }
        return data;
      })
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
      .catch(console.log(key));
  }
  handleFetchError() {
    this.setState({
      views: "Menu",
      repeat: {
        category: 10,
        count: 10,
        difficulty: ""
      },
      questions: [],
      length: 0,
      iterator: 1
    });
    console.log(this.state);
  }
}

export default Game;
