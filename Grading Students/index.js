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

let [n, ...grades] = input;
grades = grades.reduce((curr, prev) => curr.concat(parseInt(prev)), []);

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 37) {
      continue;
    }
    const n5 = Math.ceil(grades[i] / 5) * 5;
    const diff = n5 - grades[i];
    if (diff < 3) {
      grades[i] = n5;
    }
  }
  return grades;
}
console.time("gradingStudents");
console.log(gradingStudents(grades));
console.timeEnd("gradingStudents");
