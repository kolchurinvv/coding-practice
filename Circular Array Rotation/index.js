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

let [[n, k, q], a, ...queries] = input;
n = parseInt(n);
k = parseInt(k);
q = parseInt(q);
a = a.map((el) => {
  return parseInt(el);
});
queries = queries.map((el) => {
  return parseInt(el);
});

function circularArrayRotation(n, k, q, a, queries) {
  for (let i = 0; i < k; i++) {
    let last = a.pop();
    a.unshift(last);
  }
  let res = [];
  for (let i = 0; i < queries.length; i++) {
    res.push(a[queries[i]]);
  }
  return res;
}
console.time("circularArrayRotation");
console.log(circularArrayRotation(n, k, q, a, queries));
console.timeEnd("circularArrayRotation");
