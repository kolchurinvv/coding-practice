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

let [n, arr] = input

function plusMinus(n, arr) {
  let positive = 0,
    negative = 0,
    zeros = 0
  for (let i = 0; i < n; i++) {
    const element = parseInt(arr[i])
    if (element === 0) {
      zeros++
    }
    if (element > 0) {
      positive++
    }
    if (element < 0) {
      negative++
    }
  }
  const pr = (positive / n).toPrecision(6)
  const nr = (negative / n).toPrecision(6)
  const zr = (zeros / n).toPrecision(6)
  console.log(pr)
  console.log(nr)
  console.log(zr)
  // return { pr, nr, zr }
}
console.time("plusMinus")
console.log(plusMinus(n, arr))
console.timeEnd("plusMinus")
