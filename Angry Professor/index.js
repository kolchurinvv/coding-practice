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

let [t, ...cases] = input;

function angryProfessor(k, a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    const arrivalTime = a[i];
    if (arrivalTime <= 0) {
      count++;
    }
  }
  if (count >= k) {
    return "NO";
  } else {
    return "YES";
  }
}

function main(t) {
  for (let i = 0; i < t; i++) {
    const [n, k] = cases[i * 2].map((el) => parseInt(el));
    const a = cases[i * 2 + 1].map((el) => parseInt(el));
    console.log(angryProfessor(k, a));
  }
}
console.time("angryProfessor");
void main(t);
console.timeEnd("angryProfessor");
