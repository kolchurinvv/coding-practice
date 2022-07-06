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

let [[n, m], ...edges] = input

// n - # of cities
// m - roads to maintain

function roadMaintenance(n, m, edges) {
  function factorial(x) {
    if (x === 0) {
      return 1
    } else {
      return x * factorial(x - 1)
    }
  }
  // (n)
  // (m)
  const res = factorial(n) / (factorial(m) * factorial(n - m)) // not relevant
  console.log(n, m)
  console.log(edges)
  console.log("no % res = ", res)
  return res % (Math.pow(10, 9) + 7)
}
console.time("roadMaintenance")
console.log(roadMaintenance(n, m, edges))
console.timeEnd("roadMaintenance")
