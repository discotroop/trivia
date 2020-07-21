import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import * as serviceWorker from './serviceWorker';
import Menu from './Menu.js';
import QuestionView from './QuestionView.js';

// https://opentdb.com/api_config.php
// set up menu
// append relevant codes to strings
// call component that takes relavent string and returns array of questions via fetch
// write tests

let Results = [];

fetch('https://opentdb.com/api.php?amount=10')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(function(result) {
      Results.push(result);
    })
    console.log(Results[1])
  })
  .catch(function (err) {
    console.log(err);
  });

function massageData() {
  let final = []
  Results.forEach(function(result) {
      final.push(result);
  });
  return final
}

let testing = massageData();
console.log("testing", testing)
console.log("Set Results", Results);

ReactDOM.render(
  <React.StrictMode>
    <Game questions={Results}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
