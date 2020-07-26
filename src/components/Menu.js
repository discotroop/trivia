import React from "react";
import Categories from "./Categories";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      difficulty: "",
      category: 0
    };
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
  }
  handleDifficultyChange(e) {
    this.setState({ difficulty: e.target.value });
    console.log(this.state.difficulty);
  }
  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
    console.log(this.state.category);
  }
  handleCountChange(e) {
    this.setState({ count: e.target.value });
    console.log(this.state.count);
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
          Count:
          <input
            type="number"
            min="1"
            max="50"
            value={this.state.count}
            onChange={this.handleCountChange}
          ></input>
        </label>
        <br></br>
        <Categories change={this.handleCategoryChange} />
        <br></br>
        <label>
          Difficulty:
          <select
            value={this.state.difficulty}
            onChange={this.handleDifficultyChange}
          >
            <option value="easy"> Easy </option>
            <option value="medium"> Medium </option>
            <option value="hard"> Hard </option>
          </select>
        </label>
        <input type="submit" value="Start" />
      </form>
    );
  }
}

export default Menu;
