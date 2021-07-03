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
  q.unshift(null);
  for (let i = 1; i < n; i++) {
    // if this i-th person bribed twice, their position changed by -2
    // anything above that threshold is "Too chaotic"
    if (i - q[i] < -2) {
      console.log("Too chaotic");
      return;
    }
    if (i != q[i]) {
      // console.log(
      //   "i=" + i,
      //   "q[i]=" + q[i],
      //   "indexOf(i)=" + q.indexOf(i),
      //   "indexOf(i) - i = " + (q.indexOf(i) - i)
      // );

      let steps = 0;
      let indexOfI = q.indexOf(i);

      // look at i and find proper place for that. counting the difference in indecies
      if (indexOfI - i > 2) {
        steps = Math.floor((q.indexOf(i) - i) / 2);
      } else {
        steps = 0;
      }
      bribeCounter += indexOfI - (i + steps);
      console.log(q.indexOf(i), i + steps, steps);
      let newPlace = i + steps;
      let temp = parseInt(q.splice(newPlace, 1, i), 10);
      console.log("temp=" + temp);
      q.splice(indexOfI, 1, temp);

      if (indexOfI - i > 2) {
        i--;
      }
      console.log(q);
      console.log(bribeCounter);
    }
  }
}
(function main() {
  let t = parseInt(readLine(), 10);
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine(), 10);
    let q = readLine().map((el) => parseInt(el, 10));
    minimumBribes(q, n);
  }
})();
