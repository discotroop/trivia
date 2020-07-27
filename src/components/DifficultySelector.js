import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Difficulty = ({ value, handleChange }) => {
  return (
    <DropdownButton
      id="difficulty-selector"
      title={value}
      onSelect={handleChange}
    >
      <Dropdown.Item eventKey="Easy">Easy</Dropdown.Item>
      <Dropdown.Item eventKey="Medium">Medium</Dropdown.Item>
      <Dropdown.Item eventKey="Hard">Hard</Dropdown.Item>
    </DropdownButton>
  );
};

export default Difficulty;
