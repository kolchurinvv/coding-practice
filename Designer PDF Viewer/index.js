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

let [h, word] = input;

function designerPdfViewer(h, word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let heights = {};
  for (let i = 0; i < 26; i++) {
    heights[alphabet[i]] = h[i];
  }
  const tallest = word
    .toString()
    .trim()
    .split("")
    .reduce((prev, curr) => {
      if (heights[prev] > heights[curr]) {
        return prev;
      } else {
        return curr;
      }
    });
  const width = word.toString().trim().length;
  const highlightArea = width * heights[tallest];
  return highlightArea;
}
console.time("designerPdfViewer");
console.log(designerPdfViewer(h, word));
console.timeEnd("designerPdfViewer");
