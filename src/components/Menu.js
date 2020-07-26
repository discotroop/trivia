import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ difficulty: e.target.value });
  }
  handleSubmit(e) {
    alert("submitting: " + this.state.difficulty);
    this.props.submit("Questions");
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Difficulty:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Start" />
      </form>
    );
  }
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
