import { readFileSync } from "fs";

let input = readFileSync("input.txt", "utf8", (err, data) => {
  if (!!err) {
    console.error(err);
  }
  return data;
})
  .toString()
  .replace(/\B\s+/gm, "") // replace preceding empty spaces and lines with ""
  .split("\n") // split into `line` arrays
  .map((line) => line.split(" ")); // on each `line` split based on spaces

let [n, candles] = input;

function birthdayCakeCandles(candles) {
  let counter = 1;
  candles.reduce((prev, curr) => {
    if (prev === curr) {
      counter++;
    }
    if (prev > curr) {
      return prev;
    } else {
      return curr;
    }
  }, 0);
  return counter;
}
console.time("birthdayCakeCandles");
console.log(birthdayCakeCandles(candles));
console.timeEnd("birthdayCakeCandles");
