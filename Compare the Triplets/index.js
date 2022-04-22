import { readFileSync } from "fs";

let input = readFileSync("input.txt", "utf8", (err, data) => {
  if (!!err) {
    console.error(err);
  }
  return data;
})
  .toString()
  .split("\n")
  .map((line) => line.split(" "));

let [a, b] = input;

function compareTriplets(a, b) {
  let res = [0, 0];
  for (let i = 0; i < 3; i++) {
    if (a[i] - b[i] > 0) {
      res[0]++;
    } else if (a[i] - b[i] < 0) {
      res[1]++;
    }
  }
  return res;
}

console.log(compareTriplets(a, b));
