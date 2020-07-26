function categoryLookUp(category) {
  let result = "";
  switch (category) {
    case "General Knowedge":
      result = 9;
      break;
    default:
      return;
  }
  return result;
}

export default categoryLookUp;
