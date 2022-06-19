import { readFileSync } from "fs"

let input = readFileSync("input.txt", "utf8", (err, data) => {
  if (!!err) {
    console.error(err)
  }
  return data
})
  .toString()
  .replace(/\B\s+/gm, "") // replace preceding empty spaces and lines with ""
  .split("\n") // split into `line` arrays
  .map((line) => line.split(" ")) // on each `line` split based on spaces

let [n] = input

function staircase(n) {
  let level = []
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if (i >= n - j - 1) {
        level.push("#")
      } else {
        level.push(" ")
      }
    }
    console.log(level.join(""))
    level = []
  }
}
console.time("staircase")
console.log(staircase(n))
console.timeEnd("staircase")
