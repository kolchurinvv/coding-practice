import { readFileSync, createWriteStream } from "fs";

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

let [[t], ...testCases] = input;

// function saveThePrisoner(n, m, s) {
//   n = parseInt(n);
//   m = parseInt(m);
//   s = parseInt(s);
//   let candyLeft = m % n; // remainder of distribution
//   let res = candyLeft - (n - s) - 1;
//       res = m % n - n + s -1
//   if (n - m > 0) {
//     if (res <= 0) {
//       return n + res ? n + res : 1;
//     } else {
//       return res;
//     }
//   }

//   //more candy than people
//   if (n - m < 0) {
//     if (res <= 0) {
//       return n + res ? n + res : n;
//     } else {
//       return res;
//     }
//   }

//   if (n - m === 0) {
//     return n + res ? n + res : n;
//   }
// }

// this one is lifted from
// The M-1 handles the fact that the first prisoner to get a sweet is not counted
//  when giving away sweets. Example, if you are giving away 1 sweet and
//  you start at prisoner 37, it is 37 = (37 + 1 - 1) that should be warned.
// If you are giving away 2 sweets it is 38 = (37 + 2 - 1) that should be warned. And so on.
// M-1 + S adds the 'missing' candy, as if we started at the beginning
// (M-1+S)%N takes care of all the loops and returs the prisoner to warn
//  || N if previous is 0 - which it is when
function saveThePrisoner(n, m, s) {
  return (m - 1 + s) % n || n;
}

const myStream = createWriteStream("output.csv", "utf-8", "a+");
console.log("\n");
console.time(`saveThePrisoner @${t} ppl`);
for (let i = 0; i < t; i++) {
  let [n, m, s] = testCases[i];
  saveThePrisoner(n, m, s);
  myStream.write(saveThePrisoner(n, m, s).toString() + "\n");
}
console.timeEnd(`saveThePrisoner @${t} ppl`);
console.log("---------------------------");
