import { readFileSync } from "fs";
import { type } from "os";

let input = readFileSync("input.txt", "utf8", (err, data) => {
  if (!!err) {
    console.error(err);
  }
  return data;
})
  .toString()
  .split("\n")
  .map((line) => line.split(" "));

let [k, bill, b] = input;

function bonAppetit(bill, k, b) {
  k = k[1];
  let commonBill = bill;
  commonBill.splice(k, 1);

  let share =
    commonBill.reduce((acc, curr) => parseInt(acc) + parseInt(curr)) / 2;

  if (b - share !== 0) {
    console.log(b - share);
  } else {
    console.log("Bon Appetit");
  }
}

console.log(bonAppetit(bill, k, b));
