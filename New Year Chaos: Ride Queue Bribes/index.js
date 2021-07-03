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
  // prepend a null into the array for the positions to be correct
  // q.unshift(null);
  if (!q) {
    return null;
  }
  let numSkips = 0;
  let expectedFirstPos = 1;
  let expectedSecondPos = 2;
  let expectedThirdPos = 3;
  let tooChaotic = false;

  for (let i = 0; i < q.length; i++) {
    if (q[i] === expectedFirstPos) {
      expectedFirstPos = expectedSecondPos;
      expectedSecondPos = expectedThirdPos;
      expectedThirdPos++;
    } else if (q[i] === expectedSecondPos) {
      numSkips++;
      expectedSecondPos = expectedThirdPos;
      expectedThirdPos++;
    } else if (q[i] === expectedThirdPos) {
      numSkips += 2;
      expectedThirdPos++;
    } else {
      tooChaotic = true;
      break;
    }
  }
  tooChaotic ? console.log("Too chaotic") : console.log(numSkips);
}

(function main() {
  let t = parseInt(readLine(), 10);
  for (let i = 0; i < t; i++) {
    let n = parseInt(readLine(), 10);
    let q = readLine().map((el) => parseInt(el, 10));
    console.time(`#${i} line runtime`);
    minimumBribes(q, n);
    console.timeEnd(`#${i} line runtime`);
    console.log("---------------------------------------------------\n");
  }
})();
