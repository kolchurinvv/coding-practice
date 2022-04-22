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

let [[s, t], [a, b], [m, n], apples, oranges] = input;
s = parseInt(s);
t = parseInt(t);
a = parseInt(a);
b = parseInt(b);
apples = apples.map((el) => parseInt(el));
oranges = oranges.map((el) => parseInt(el));

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;
  for (const apple of apples) {
    if (a + apple >= s && a + apple <= t) {
      appleCount++;
    }
  }
  for (const orange of oranges) {
    if (b + orange <= t && b + orange >= s) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
console.time("countApplesAndOranges");
console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
console.timeEnd("countApplesAndOranges");
