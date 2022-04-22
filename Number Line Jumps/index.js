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

const [line] = input;
const [x1, v1, x2, v2] = line;

function kangaroo(x1, v1, x2, v2) {
  let x = (x1 * v2 - x2 * v1) / (v2 - v1);
  let y1 = (x - x1) / v1;
  // let y2 = (x - x2) / v2;
  console.log(x, y1);
  console.log(x <= 0, !!(y1 % 1));
  if (x <= 0 || !!(y1 % 1) || y1 < 0) {
    return "NO";
  } else {
    return "YES";
  }
}
console.time("kangaroo");
console.log(kangaroo(x1, v1, x2, v2));
console.timeEnd("kangaroo");
