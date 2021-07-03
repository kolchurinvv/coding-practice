import { readFileSync } from "fs";

// read from file
let temp = "";

temp = readFileSync("input.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    return console.error(err);
  }
  return data;
});

let currentLine = 0;
function readLine() {
  return temp[currentLine++];
}

temp = temp
  .replace(/\s*$/, "")
  .split("\n")
  .map((str) => str.replace(/\s*$/, ""));

/* arr is a 6x6 array of integers where:
  • -9 <= arr[i][j] <= 9
  • 0 <= i, j <= 5
*/
let arr = [];

for (let i = 0; i < 6; i++) {
  arr[i] = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));
}

// console.log(arr);

/* hourglass has a form of:

a b c
  d 
h i g

where the hourglass sum is the sum of all the values
*/

function getHourglass(arr) {
  // let Yadjustment = 0;
  // let Xadjustment = 0;
  let maxSum = -Infinity;

  for (let Yadjustment = 0; Yadjustment <= 3; Yadjustment++) {
    for (let Xadjustment = 0; Xadjustment <= 3; Xadjustment++) {
      let sum = 0;
      let hourglass = [];

      for (let i = 0 + Yadjustment; i < 3 + Yadjustment; i++) {
        hourglass[i] = [];
        for (let j = 0 + Xadjustment; j < 3 + Xadjustment; j++) {
          // in brackets: i = 1 + Yadjustment insures we are looking at the second row of the current hourglass
          // i !== j - Xadjustment + Yadjustment insures that we don't get the non-middle values of the 3x3 square
          // the "!" is there to reverse the selection only to the middle value of the hourglass
          if (!(i === 1 + Yadjustment && i !== j - Xadjustment + Yadjustment)) {
            sum += arr[i][j];
            hourglass[i][j] = arr[i][j];
          } else {
            hourglass[i][j] = 0;
          }
        }
      }
      if (sum > maxSum) {
        maxSum = sum;
        sum = 0;
      }
      // console.table(hourglass);
      // console.log(sum);
    }
  }

  return maxSum;
}
console.table(getHourglass(arr));
// getHourglass(arr);
