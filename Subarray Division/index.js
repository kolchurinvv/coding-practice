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

let [n, s, [d, m]] = input;
s = s.map((el) => parseInt(el));
d = parseInt(d);
m = parseInt(m);

function birthday(s, d, m) {
  let waysToSplit = 0;
  if (s.length < m) {
    return waysToSplit;
  }
  if (s.length === m) {
    const sumOfAllS = s.reduce((prev, curr) => prev + curr);
    if (sumOfAllS === d) {
      waysToSplit++;
    }
  } else {
    for (let i = 0; i < s.length; i++) {
      const newArr = s.slice(i, i + m);
      let sum = 0;
      if (newArr.length === m) {
        sum = newArr.reduce((prev, curr) => prev + curr);
        if (sum === d) {
          waysToSplit++;
        }
      }
    }
  }
  return waysToSplit;
}
console.time("birthday");
console.log(birthday(s, d, m));
console.timeEnd("birthday");
