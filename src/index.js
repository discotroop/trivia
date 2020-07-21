import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// https://opentdb.com/api_config.php
// set up menu
// append relevant codes to strings
// call component that takes relavent string and returns array of questions via fetch


function getData() {

fetch('https://opentdb.com/api.php?amount=10')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    return data.results[0].category;
  });
}

let questions = getData()
console.log("hello world", questions)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
