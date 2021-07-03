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
  .map((line) => line.split(" "));

let [[n, m], ...lines] = input;
let queries = [];
for (let i = 0; i < m; i++) {
  queries[i] = lines[i];
}

function arrayManipulation(n, m, queries) {
  n = parseInt(n);
  let arr = new Array(n + 1);
  for (let i = 0; i < m; i++) {
    let [a, b, k] = queries[i];
    a = parseInt(a);
    b = parseInt(b);
    k = parseInt(k);
    arr[a] = arr[a] ? arr[a] + k : k;
    arr[b + 1] = arr[b + 1] ? arr[b + 1] - k : -k;
  }
  let max = 0;
  arr.reduce((acc, curr) => {
    if (acc + curr > max) {
      max = acc + curr;
    }
    return curr + acc;
  }, 0);
  return max;
}
console.time("arrayManipulation");
console.log(arrayManipulation(n, m, queries));
console.timeEnd("arrayManipulation");
