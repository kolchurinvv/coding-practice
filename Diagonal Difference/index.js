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

let [n, ...arr] = input

/**
 *
 * @param {number} n
 * @param {array} arr
 * @returns number
 *
 * my awesome function
 */

function diagonalDifference(n, arr) {
  let tl_br_sum = 0
  let tr_bl_sum = 0
  for (let i = 0; i < n; i++) {
    tl_br_sum += parseInt(arr[i][i])
    tr_bl_sum += parseInt(arr[i][n - 1 - i])
  }

  return Math.abs(tr_bl_sum - tl_br_sum)
  // return arr
}
console.time("diagonalDifference")
console.log(diagonalDifference(n, arr))
console.timeEnd("diagonalDifference")
