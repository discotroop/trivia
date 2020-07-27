import React from "react";
import Categories from "./CategorySelector";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Difficulty from "./DifficultySelector";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      category: 0,
      difficulty: "Easy",
      categoryName: "General Knowledge"
    };
    this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }
  handleCountChange(e) {
    this.setState({ count: e.target.value });
  }
  handleCategoryChange(e) {
    console.log(e);
    console.log(typeof e);
    console.log(this.trimNumber(e));
    console.log(this.trimLetters(e));
    console.log(e);
    this.setState({
      category: this.trimNumber(e),
      categoryName: this.trimLetters(e)
    });
  }
  handleDifficultyChange(e) {
    this.setState({ difficulty: e });
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
  handleDropDown = e => {
    console.log(e);
  };
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
      <div className="menu-container">
        <div className="drop-test">
          <DropdownButton
            id="dropdown-basic-button"
            title="Select"
            onSelect={this.handleDropDown}
          >
            <Dropdown.Item eventKey="Test 1">Test 1</Dropdown.Item>
            <Dropdown.Item eventKey="test 2">test 2</Dropdown.Item>
          </DropdownButton>{" "}
        </div>
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
          <Categories
            value={this.state.categoryName}
            handleChange={this.handleCategoryChange}
          />
          <br></br>
          <Difficulty
            value={this.state.difficulty}
            handleChange={this.handleDifficultyChange}
          />
          <input type="submit" value="Start" />
        </form>
      </div>
    );
  }
}

export default Menu;
