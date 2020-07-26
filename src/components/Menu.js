import React from "react";
import Categories from "./Categories";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      category: 0,
      difficulty: ""
    };
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
  }
  handleCountChange(e) {
    this.setState({ count: e.target.value });
  }
  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
  }
  handleDifficultyChange(e) {
    this.setState({ difficulty: e.target.value });
  }

  handleSubmit(e) {
    alert("submitting: " + this.state.difficulty);

    this.props.submit(
      "Questions",
      this.state.count,
      this.state.category,
      this.state.difficulty
    );
    e.preventDefault();
  }
  render() {
    return (
      <div className="menu-container">
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
      </div>
    );
  }
}

export default Menu;
