import { readFileSync } from "fs";

let input = readFileSync("input.txt", "utf8", (err, data) => {
  if (!!err) {
    console.error(err);
  }
  return data;
});

let currentLine = 0;
function readLine() {
  return input[currentLine++];
}

input = input
  .toString()
  .split("\n")
  .map((line) => line.split(" "));

function minimumBribes(q, n) {
  let bribeCounter = 0;
  console.time("copy & unshift");
  const origianl = [null, ...q];
  q.unshift(null);
  console.timeEnd("copy & unshift");
  console.time("loop");
  for (let i = 1; i < 23 + 1; i++) {
    // if this i-th person bribed twice, their position changed by -2
    // anything above that threshold is "Too chaotic"
    if (i - origianl[i] < -2) {
      console.log("Too chaotic");
      return;
    }
    console.timeLog("loop", "i = " + i);
    if (i != q[i]) {
      let steps = 0;
      let indexOfI = q.indexOf(i);

      // look at i and find proper place for that. counting the difference in indecies
      if (indexOfI - i > 2) {
        steps = Math.floor((q.indexOf(i) - i) / 2);
      } else {
        steps = 0;
      }
      // bribeCounter += indexOfI - (i + steps);
      // console.log(q.indexOf(i), i + steps, steps);
      // console.log(q[i], i, indexOfI - i);
      let newPlace = q[i] + steps;
      // console.log("newPlace = " + newPlace);
      let temp = parseInt(q.splice(newPlace, 1, q[i]), 10);
      // console.log("temp=" + temp);
      q.splice(i, 1, temp);
      // !!!! this is where the loop breaks!! need to make sure loop can continue
      console.log(q.indexOf(i), i);
      if (indexOfI - i > 2) {
        i--;
      }
      bribeCounter++;
      // console.log(q);
    }
  }
  console.timeEnd("loop");
  console.log(bribeCounter);
}
(function main() {
  let t = parseInt(readLine(), 10);
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine(), 10);
    let q = readLine().map((el) => parseInt(el, 10));
    // console.time(`line # ${i}`);
    minimumBribes(q, n);
    // console.timeEnd(`line # ${i}`);
  }
})();
