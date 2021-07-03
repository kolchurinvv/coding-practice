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

let [n, arr] = input;

// since this is essentially a recursive loop,
// this has a productivity limit
function minimumSwaps(arr) {
  let swaps = 0;
  let actualIterations = 0;
  for (let i = 0; i < arr.length; i++) {
    actualIterations++;
    if (arr[i] == i + 1) {
      continue;
    }

    let temp = arr[arr[i] - 1];
    arr[arr[i] - 1] = arr[i];
    arr[i] = temp;
    swaps++;
    i--;
  }
  console.log("actually looped", actualIterations, "times");
  return swaps;
}
console.time("minimumSwaps");
console.log(minimumSwaps(arr));
console.timeEnd("minimumSwaps");
