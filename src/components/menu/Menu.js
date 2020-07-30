import React from "react";
import Categories from "./CategorySelector";
import Difficulty from "./DifficultySelector";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      category: 0,
      difficulty: "Difficulty",
      categoryName: "Category"
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
    this.setState({
      category: this.trimNumber(e),
      categoryName: this.trimLetters(e)
    });
  }
  handleDifficultyChange(e) {
    this.setState({ difficulty: e });
  }

  handleSubmit(e) {
    if (this.state.difficulty === "Difficulty") {
      this.props.submit(
        "Questions",
        this.state.count,
        this.state.category,
        "easy"
      );
    } else {
      this.props.submit(
        "Questions",
        this.state.count,
        this.state.category,
        this.state.difficulty
      );
    }
    e.preventDefault();
  }
  trimNumber(string) {
    let numberPattern = /\d+/g;
    let result = string.match(numberPattern).join([]);
    return result;
  }
  trimLetters(string) {
    let stringPattern = /[a-zA-Z\s]/g;
    let result = string.match(stringPattern).join([]);
    return result;
  }
  render() {
    return (
      <div className="menu-container bg-light">
        <div className="menu-header">
          <h1 className="text-primary"> Tiny Trivia </h1>
          <p className="text-secondary">
            {" "}
            Make custom selections or just hit start to jump in!{" "}
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label className="text-secondary">
            Count:
            <input
              type="number"
              min="1"
              max="50"
              value={this.state.count}
              onChange={this.handleCountChange}
            ></input>
          </label>
          <Categories
            value={this.state.categoryName}
            handleChange={this.handleCategoryChange}
          />
          <Difficulty
            value={this.state.difficulty}
            handleChange={this.handleDifficultyChange}
          />
          <input
            className="btn btn-primary submit"
            type="submit"
            value="Start"
          />
        </form>
      </div>
    );
  }
}

export default Menu;
