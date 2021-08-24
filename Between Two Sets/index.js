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

let [[n, m], a, b] = input;

function getTotalX(a, b) {
  const boundaries = [parseInt(a.slice(-1)), parseInt(b.slice(0, 1))];
  let possibleVals = [];
  for (let i = boundaries[0]; i <= boundaries[1]; i++) {
    possibleVals.push(i);
  }
  for (const valA of a) {
    for (const x of possibleVals) {
      if (x % valA) {
        possibleVals.splice(possibleVals.indexOf(x), 1);
      }
    }
  }
  for (const valB of b) {
    for (const x of possibleVals) {
      if (valB % x) {
        possibleVals.splice(possibleVals.indexOf(x), 1);
      }
    }
  }

  return { possibleVals };
}
console.time("getTotalX");
console.log(getTotalX(a, b));
console.timeEnd("getTotalX");
