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

let [arr] = input;

function miniMaxSum(arr) {
  arr.sort();
  let minSum = 0;
  let maxSum = 0;
  const smallArr = [...arr];
  const maxArr = [...arr];
  smallArr.pop();
  minSum = smallArr.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
  });
  maxArr.shift();
  maxSum = maxArr.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr);
  });
  return [minSum, maxSum].toString().replace(",", " ");
}
console.time("miniMaxSum");
console.log(miniMaxSum(arr));
console.timeEnd("miniMaxSum");
