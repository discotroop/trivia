// sample key
// https://opentdb.com/api.php?amount=10&category=10&difficulty=medium

// max number = 50

// Set default call.

// key to get = https://opentdb.com/api.php?&amount=15&category=10&difficulty=medium
// should call 15 questions on category books at medium difficulty

// change this to take one argument and pass in an object with
// amount, category and difficulty keys.?
function generateKey(amount, category, difficulty) {
  // set default call
  let baseString = "https://opentdb.com/api.php?";

  // handle passed amount
  if (amount) {
    baseString = baseString + "&amount=" + amount;
  } else {
    // set default count to 10
    baseString = baseString + "amount=10";
  }

  if (category) {
    baseString = baseString + "&category=" + category;
  } else {
    console.log("default categories");
  }

  if (difficulty) {
    baseString = baseString + "&difficulty=" + difficulty;
  } else {
    console.log("default difficulty");
  }

  return baseString;
}

export default generateKey;
