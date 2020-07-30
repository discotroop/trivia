import React from "react";

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
        onChange={console.log(value)}
      ></input>
      <output
        for="count"
        onFormInput="value = count.valueAsNumber;"
        defaultValue="hi"
      ></output>
    </label>
  );
};

export default Count;
