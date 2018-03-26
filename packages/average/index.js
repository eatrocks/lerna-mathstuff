import add from "../add";
import divide from "../divide";

// Find the average of an array of numbers;
const average = arr => {
  const arrSum = arr.reduce((acc, b) => add(acc, b), 0);
  return divide(arrSum, arr.length);
};

export default average;
