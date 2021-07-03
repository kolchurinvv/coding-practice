import { readFileSync } from "fs";

let input = readFileSync("input.txt", "utf8", (err, data) => {
  if (!!err) {
    console.error(err);
  }
  return data;
})
  .toString()
  .split("\n")
  .map((line) => line.split(" "));

let [s] = input;

//this is AT LEAST x2 faster than superReduceString(s), but is equivalent to reduceString(s)
function processData([s]) {
  let arr = s.split("");
  let iterations = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      // console.log(i, arr.length);
      i = -1;
    }
    iterations++;
  }
  console.log(`processData(s) iterations: ${iterations}`);
  return arr.length ? arr.join("") : "Empty String";
}

function superReducedString([s]) {
  s = s.toString();
  let loopedThroughTimes = 0;
  let iterations = s.length;
  let rx =
    /a{2}|b{2}|c{2}|d{2}|e{2}|f{2}|g{2}|h{2}|i{2}|j{2}|k{2}|l{2}|m{2}|n{2}|o{2}|p{2}|q{2}|r{2}|s{2}|t{2}|u{2}|v{2}|w{2}|x{2}|y{2}|z{2}/gm;
  for (let i = 0; i < iterations; i++) {
    loopedThroughTimes++;
    s = s.replace(rx, "");
  }
  console.log(
    `superReduceString(s) actually looped through s #: ${loopedThroughTimes}`
  );
  return s ? s : "Empty String";
}

function reduceString([s]) {
  s = s.toString();
  let iterations = 0;
  let rx =
    /a{2}|b{2}|c{2}|d{2}|e{2}|f{2}|g{2}|h{2}|i{2}|j{2}|k{2}|l{2}|m{2}|n{2}|o{2}|p{2}|q{2}|r{2}|s{2}|t{2}|u{2}|v{2}|w{2}|x{2}|y{2}|z{2}/gm;
  let currArrLn = 0;
  while (!!s.length && s.length !== currArrLn) {
    currArrLn = s.length;
    s = s.replace(rx, "");
    // console.log(s.length, currArrLn);
    iterations++;
  }
  console.log(`reduceString(s) iterations: ${iterations}`);
  return s ? s : "Empty String";
}

console.time("superReducedString(s)");
superReducedString(s);
console.timeEnd("superReducedString(s)");
console.time("processData(s)");
console.log("------------");
processData(s);
console.timeEnd("processData(s)");
console.time("reduceString(s)");
console.log("------------");
reduceString(s);
console.timeEnd("reduceString(s)");
