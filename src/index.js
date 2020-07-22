import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game.js';
import * as serviceWorker from './serviceWorker';
import Menu from './components/Menu.js';
import QuestionView from './components/QuestionView.js';

// https://opentdb.com/api_config.php
// set up menu
// append relevant codes to strings
// call component that takes relavent string and returns array of questions via fetch
// write tests

// Query for Questions
let Questions = [];

fetch('https://opentdb.com/api.php?amount=10')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(function(question) {
      console.log(question)
      // consolidate correct answer into incorrect_answers array
      question.incorrect_answers.push(question.correct_answer);
      // shuffle the order of the incorrect_answers array to randomize order.
      question.incorrect_answers = shuffleArray(question.incorrect_answers);
      // add formatted question to Questions array
      Questions.push(question);
    })
  })
  // handle errors
  .catch(function (err) {
    console.log(err);
  });

console.log("Set Questions", Questions);
console.log("individual", Questions[0])

// THIS IS A TIMING ISSUE... I THINK => look at the call stack!

// randomize questions order
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

ReactDOM.render(
  <React.StrictMode>
    <Game questions={Questions}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
