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

let [[n, m], a, b] = input;

// This is my solution; the problem is the update of the length of an array using splice()
// when it comes to the last element in the spliced array

// function getTotalX(a, b) {
//   const boundaries = [parseInt(a.slice(-1)), parseInt(b.slice(0, 1))];
//   let possibleVals = [];
//   for (let i = boundaries[0]; i <= boundaries[1]; i++) {
//     possibleVals.push(i);
//   }
//   for (const valA of a) {
//     for (const x of possibleVals) {
//       console.log(x, valA);
//       if (x % valA) {
//         possibleVals.splice(possibleVals.indexOf(x), 1);
//       }
//     }
//   }
// for (const valB of b) {
//   for (const x of possibleVals) {
//     if (valB % x) {
//       possibleVals.splice(possibleVals.indexOf(x), 1);
//     }
//   }
// }
//   return possibleVals;
// }

function getTotalX(a, b) {
  let validCount = 0;

  for (let x = 1; x <= 100; x++) {
    if (a.every((int) => x % int == 0)) {
      if (b.every((int) => int % x == 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}
console.time("getTotalX");
console.log(getTotalX(a, b));
console.timeEnd("getTotalX");
