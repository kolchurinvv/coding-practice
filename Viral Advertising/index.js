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

let [[n]] = input;

function viralAdvertising(n) {
  let allRecipients = 0;
  if (n === 1) {
    allRecipients = Math.floor(5 / 2) * 3;
    return Math.floor(5 / 2) * 3;
  }
}
console.time("viralAdvertising");
console.log(viralAdvertising(n));
console.timeEnd("viralAdvertising");
