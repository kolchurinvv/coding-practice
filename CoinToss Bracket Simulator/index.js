import { readFileSync } from "fs";

let input = readFileSync("input.txt", "utf8", (err, data) => {
  if (!!err) {
    console.error(err);
  }
  return data;
}).toString()
  .replace(/\B\s+/gm, "")           // replace preceding empty spaces and lines with ""
  .split("\n")                     // split into `line` arrays
  .map((line) => line.split(" "));  // on each `line` split based on spaces

let [n] = input;

/**
 * given an N amount of players complete
 */



function runTournament(n) {
  return {n}
}
console.time("runTournament");
console.log(runTournament(n));
console.timeEnd("runTournament");

