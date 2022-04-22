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

let [n, ar] = input

function aVeryBigSum(ar) {
  const sum = new Map()
  function carryTheOne(position, int) {
    const existingSum = sum.get(3 * position + 3) ?? 0
    const integer = parseInt(int, 10)
    if (existingSum + integer > 999) {
      const remainder = existingSum + integer - 1000
      sum.set(3 * position + 3, remainder)
      const next = position + 1
      return carryTheOne(next, 1)
    }
    sum.set(3 * position + 3, existingSum + integer)
  }
  const splitPattern = /\B(?=(?:\d{3})+(?!\d))/g
  for (const integer of ar) {
    const splitInteger = integer.toString().split(splitPattern).reverse()
    for (let j = 0; j < splitInteger.length; j++) {
      carryTheOne(j, splitInteger[j])
    }
  }

  const resArr = Array.from(sum.values()).reduceRight((prev, curr, index) => {
    let str = curr.toString()
    if (str.length < 3 && index + 1 !== sum.size) {
      str = str.padStart(3, "0")
    }
    prev.push(str)
    return prev
  }, [])
  return resArr.join("")
}
console.time("aVeryBigSum")
console.log(aVeryBigSum(ar))
console.timeEnd("aVeryBigSum")
