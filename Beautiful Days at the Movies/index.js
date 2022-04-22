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

let [[i, j, k]] = input;

function beautifulDays(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    let reverse = num.toString().split("").reverse().join("");
    reverse = parseInt(reverse);
    if (!((num - reverse) % k)) {
      count++;
    }
  }
  return count;
}
console.time("beautifulDays");
console.log(beautifulDays(i, j, k));
console.timeEnd("beautifulDays");
