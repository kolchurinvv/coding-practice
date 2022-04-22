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
  let max = 0;
  let previewTable = {};

  function existsInRangeAt(x, y) {
    let existsAt = [];
    for (let i = x + 1; i <= y; i++) {
      if (!!valuesOfK[i]) {
        existsAt.push(i);
      }
    }
    return existsAt;
  }

  let valuesOfK = new Array(parseInt(n) + 1);
  let [firstA, firstB, firstK] = queries[0];
  valuesOfK[parseInt(firstB)] = parseInt(firstK);
  valuesOfK[parseInt(firstA)] = parseInt(firstK);
  for (let i = 1; i < m; i++) {
    let [a, b, k] = queries[i];
    let posOfPrevA = parseInt(queries[i - 1][0]);
    let posOfPrevB = parseInt(queries[i - 1][1]);
    let valOf_K_atPrevAPos = valuesOfK[posOfPrevA];
    let valOf_K_atPrevBPos = valuesOfK[posOfPrevB];
    a = parseInt(a);
    b = parseInt(b);
    k = parseInt(k);
    // console.log(a, posOfPrevB);

    if (a >= posOfPrevA && a <= posOfPrevB) {
      // console.log("a >= posOfPrevA && a <= posOfPrevB");
      valuesOfK[a] = valOf_K_atPrevAPos + k;
      if (!!existsInRangeAt(a, posOfPrevB)) {
        console.log(existsInRangeAt(a, posOfPrevB));
        // console.log(valuesOfK[existsInRangeAt(a, posOfPrevB)]);
        // valuesOfK[existsInRangeAt(a, posOfPrevB)] += k;
      }
    } else {
      // a <posOfPrevA
      console.log("a < posOfPrevA");
      valuesOfK[a] = k;
    }
    if (existsInRangeAt(a, posOfPrevB) < b) {
      let x = existsInRangeAt(a, posOfPrevB);
      valuesOfK[parseInt(x) + 1] = k;
    }
    if (b <= posOfPrevB) {
      console.log("b <= posOfPrevB");
      valuesOfK[b] = valOf_K_atPrevBPos + k;
    } else {
      // console.log("hi");
      valuesOfK[b] = k;
    }
    max = valuesOfK.reduce((max, curr) => {
      return curr > max ? curr : max;
    }, 0);
  }
  valuesOfK.shift();
  console.log(valuesOfK);
  previewTable.valuesOfK = valuesOfK;
  // console.table(previewTable);
  // return max;
}

console.time("arrayManipulation");
console.log(arrayManipulation(n, m, queries));
console.timeEnd("arrayManipulation");

// this solves the problem, but the input is incorrect
//
// let input = readFileSync("input.txt", "utf8", (err, data) => {
//   if (!!err) {
//     console.error(err);
//   }
//   return data;
// })
//   .toString()
//   .replace(/\B\s+/gm, "") // replace preceding empty spaces and lines with ""
//   .split("\n") // split into `line` arrays
//   .map((line) => line.split(" ")); // on each `line` split based on spaces

// let [line, ...queries] = input;
// let [n, m] = line;

// let arr = [];
// for (let i = 0; i < n; i++) {
//   arr[i] = 0;
// }
// let max = 0;
// function arrayManipulation([line], queries) {
//   let [a, b, k] = queries;
//   let localMax = 0;
//   for (let i = a - 1; i < b; i++) {
//     arr[i] += parseInt(k);
//     localMax = arr[i] > localMax ? arr[i] : localMax;
//   }
//   return localMax;
// }
// console.time("arrayManipulation");
// for (let i = 0; i < m; i++) {
//   let currRes = arrayManipulation(n, queries[i]);
//   // console.log(arrayManipulation(n, queries[i]));
//   max = currRes > max ? currRes : max;
//   console.log(max);
// }
// console.timeEnd("arrayManipulation");
