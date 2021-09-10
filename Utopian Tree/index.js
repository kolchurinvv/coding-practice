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

let [t, ...arr] = input;
arr = arr.reduce((curr, prev) => curr.concat(parseInt(prev)), []);

function utopianTree(n) {
  let treeHeight = 1;

  for (let cycle = 0; cycle < n; cycle++) {
    if (cycle % 2) {
      treeHeight++;
    } else {
      treeHeight *= 2;
    }
  }

  return treeHeight;
}

function main(t) {
  let result = [];
  for (let tItr = 0; tItr < t; tItr++) {
    const n = arr[tItr];

    result.push(utopianTree(n));
  }
  return result;
}
console.time("utopianTree");
console.log(main(t));
console.timeEnd("utopianTree");
