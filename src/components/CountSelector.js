import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

let countHolder = [];
function generateNumbers() {
  for (let i = 1; i < 51; i++) {
    countHolder.push(i);
  }
}
generateNumbers();

const Count = ({ value, handleChange }) => {
  return (
    <label>
      Count:{" "}
      <input
        type="range"
        id="count"
        name="count"
        min="1"
        max="50"
        defaultValue={value}
        onInput={console.log(value)}
        onChange={console.log(value)}
      ></input>
    </label>
  );
};

export default Count;
