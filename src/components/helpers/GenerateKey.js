function generateKey(count, category, difficulty) {
  // set default call
  let baseString = "https://opentdb.com/api.php?";

  if (count) {
    baseString = baseString + "amount=" + count;
  } else {
    console.log("default count");
  }

  if (category) {
    category = category + "";
    baseString = baseString + "&category=" + category;
  } else {
    console.log("default categories");
  }

  if (difficulty) {
    baseString = baseString + "&difficulty=" + difficulty.toLowerCase();
  } else {
    console.log("default difficulty");
  }
  console.log("string call: ", baseString);
  return baseString;
}

export default generateKey;
