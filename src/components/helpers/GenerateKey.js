// sample key
// https://opentdb.com/api.php?amount=10&category=10&difficulty=medium

// max number = 50

// Set default call.

// change this to take one argument and pass in an object with
// amount, category and difficulty keys.?
function generateKey(amount, category, difficulty) {
  // set default call
  let baseString = "https://opentdb.com/api.php?";
  let lastIndex = baseString.length - 1;

  // handle passed amount
  if (amount) {
    baseString = baseString + "amount=" + amount;
  } else {
    // set default count to 10
    baseString = baseString + "amount=10";
  }

  if (category) {
    if (baseString[lastIndex] === "?") {
      baseString = baseString + "category=" + category;
    } else {
      baseString = baseString + "&category=" + category;
    }
  } else {
    console.log("default categories");
  }

  if (difficulty) {
    if (baseString[lastIndex] === "?") {
      baseString = baseString + "difficulty=" + difficulty;
    } else {
      baseString = baseString + "&difficulty=" + difficulty;
    }
  } else {
    console.log("default difficulty");
  }

  return baseString;
}

export default generateKey;
