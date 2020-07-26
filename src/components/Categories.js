import React from "react";

let categoryholder = [
  {
    name: "General Knowledge",
    value: 9
  },
  {
    name: "Books",
    value: 10
  },
  {
    name: "Film",
    value: 11
  },
  { name: "Music", value: 12 },
  {
    name: "Musicals and Theatre",
    value: 13
  },
  {
    name: "Television",
    value: 14
  },
  {
    name: "Video Games",
    value: 15
  },
  {
    name: "Board Games",
    value: 16
  },
  {
    name: "Science and Nature",
    value: 17
  },
  {
    name: "Computers",
    value: 18
  },
  {
    name: "Mathematics",
    value: 19
  },
  {
    name: "Mythology",
    value: 20
  },
  {
    name: "Sports",
    value: 21
  },
  {
    name: "Geography",
    value: 22
  },
  {
    name: "History",
    value: 23
  },
  {
    name: "Politics",
    value: 24
  },
  {
    name: "Art",
    value: 25
  },
  {
    name: "Celebrities",
    value: 26
  },
  {
    name: "Animals",
    value: 27
  },
  {
    name: "Vehicles",
    value: 28
  },
  {
    name: "Comics",
    value: 29
  },
  {
    name: "Science-Gadgets",
    value: 30
  }
];

const Categories = function (props) {
  return (
    <label>
      {" "}
      Category:
      <select id="Category" name="Category">
        {categoryholder.map(category => (
          <option value={category.value}> {category.name} </option>
        ))}
      </select>
    </label>
  );
};

export default Categories;
