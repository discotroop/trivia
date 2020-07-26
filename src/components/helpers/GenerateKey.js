// sample key
// https://opentdb.com/api.php?count=10&category=10&difficulty=medium
//opentdb.com/api.php?count=11&category=30&difficulty=hard
//opentdb.com/api.php?amount=11&category=17&difficulty=hard

// max number = 50

// Set default call.

// key to get = https://opentdb.com/api.php?&count=15&category=10&difficulty=medium
// should call 15 questions on category books at medium difficulty

// change this to take one argument and pass in an object with
// count, category and difficulty keys.?
function generateKey(count, category, difficulty) {
  // set default call
  let baseString = "https://opentdb.com/api.php?";

  // handle passed count
  if (count) {
    baseString = baseString + "amount=" + count;
  } else {
    // set default count to 10
    console.log("default count");
  }

  if (category) {
    category = category + "";
    baseString = baseString + "&category=" + category;
  } else {
    console.log("default categories");
  }

  if (difficulty) {
    baseString = baseString + "&difficulty=" + difficulty;
  } else {
    console.log("default difficulty");
  }
  console.log("string call: ", baseString);
  return baseString;
}

export default generateKey;
