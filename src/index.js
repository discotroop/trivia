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

ReactDOM.render(
  <React.StrictMode>
    <Game/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();


// To Do
// add button component
// passdown functionality to check questions to buttons