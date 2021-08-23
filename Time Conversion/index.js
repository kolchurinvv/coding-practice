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

let [[s]] = input;

function timeConversion(s) {
  const time = s.split(":");
  const meridiem = time[2].slice(-2);
  let hours = time[0];
  if (meridiem === "AM") {
    if (hours === "12") {
      hours = "00";
    }
  } else {
    hours = parseInt(hours);
    if (hours === 12) {
      hours = "12";
    } else {
      hours += 12;
    }
  }

  time[2] = time[2].replace(/\D+/, "");
  time.shift();
  time.unshift(hours);
  return time.join(":");
}
console.time("timeConversion");
console.log(timeConversion(s));
console.timeEnd("timeConversion");
