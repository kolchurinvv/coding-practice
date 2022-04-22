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

const [line, magazine, note] = input;
const [m, n] = line;

function checkMagazine(m, n, magazine, note) {
  let magWordMap = new Map();
  let res = "Yes";
  for (let i = 0; i < m; i++) {
    let wordCount = magWordMap.get(magazine[i])
      ? magWordMap.get(magazine[i])
      : 0;
    if (magWordMap.has(magazine[i])) {
      magWordMap.set(magazine[i], wordCount + 1);
    } else {
      magWordMap.set(magazine[i], 1);
    }
  }
  // for (const word of note) {
  //   let wordCount = magWordMap.get(word);
  //   // console.log(word, wordCount);
  //   let reduceByOne = wordCount - 1;
  //   magWordMap.set(word, reduceByOne);
  //   console.log(word, wordCount);
  //   if (wordCount < 0 || !magWordMap.has(word)) {
  //     res = "No";
  //   }
  // }
  // console.log(magWordMap);
  for (let i = 0; i < n; i++) {
    const word = note[i];
    let wordCount = magWordMap.get(word);
    if (magWordMap.has(word)) {
      magWordMap.set(word, wordCount - 1);
    } else {
      console.log(word, wordCount);

      res = "No";
    }
    if (magWordMap.get(word) < 0) {
      console.log(word, wordCount);

      res = "No";
    }
  }
  return res;
}
console.time("checkMagazine");
console.log(checkMagazine(m, n, magazine, note));
console.timeEnd("checkMagazine");
