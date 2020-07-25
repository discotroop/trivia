import React from 'react';

const Menu = (props) => {
  return (
    <div className="Menu">
      <button onClick={() => props.submit('Questions')}> Testing </button>
      {props.view}
    </div>
  );
}

export default Menu;


// <div className="Menu">
// <header className="Menu-header">
//   {/* <img src={logo} className="App-logo" alt="logo" /> */}
//   <p>
//     Welcome to Trivia
//   </p>
//   <button onClick={props.submit()}> click me </button>
// </header>
// <div>
//   <h1> Select </h1>
//   <form>
//     <label for="count"> Number of Questions: </label>
//     <select id="count" name='count'>
//       <option value="10"> 10 </option>
//       <option value='15'> 15 </option> 
//     </select>
//     <label for="category"> Category: </label>
//     <select id="category" name='category'>
//       {/* change values to correct numbers ?  */}
//       <option value="Arts"> Arts </option>
//       <option value='Space'> Space </option> 
//     </select>
//     <label for="difficulty"> Difficulty: </label>
//     <select id="difficulty" name='difficulty'>
//       {/* change values to correct numbers ?  */}
//       <option value="easy"> Easy </option>
//       <option value='medium'> Medium </option> 
//       <option value='hard'> Hard </option>
//     </select>
//   </form>
// </div>
// </div>
