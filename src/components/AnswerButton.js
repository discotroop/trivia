import React from 'react';

// need to 

function BuildButtons(props) {
    const questions = props.questions;
    const listItems = questions.map((question) =>  
      <li>{question.type}</li>  
      );  
    return (
      <ul>{listItems}</ul>  
      );
    }

export default BuildButtons;