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

let [n, products, a, productPrices, m, productSold, f, soldPrice] = input;

/*
Given the names of `products` and their correct prices - `productPrices`
check wheather the items sold (`productsSold`) had been sold for the
correct price (`soldPrice`)
*/

function testfunction(products, productPrices, productSold, soldPrice) {
  let menu = {};
  let actuallySold = {};
  let errors = 0;
  for (let i = 0; i < products.length; i++) {
    let key = products[i];
    menu[key] = productPrices[i];
  }
  for (let i = 0; i < productSold.length; i++) {
    let key = productSold[i];
    if (!actuallySold[key]) {
      actuallySold[key] = [];
      actuallySold[key].push(soldPrice[i]);
    } else {
      actuallySold[key].push(soldPrice[i]);
    }
  }
  for (let el in actuallySold) {
    while (
      actuallySold[el].indexOf(menu[el]) >= 0 &&
      !!actuallySold[el].length
    ) {
      actuallySold[el].splice(actuallySold[el].indexOf(menu[el]), 1);
    }
    errors += actuallySold[el].length;
  }
  return errors;
}

function secondWay(products, productPrices, productSold, soldPrice) {
  let menu = {};
  let counter = 0;
  for (let i = 0; i < products.length; i++) {
    menu[products[i]] = productPrices[i];
  }
  for (let i = 0; i < productSold.length; i++) {
    let currentProduct = productSold[i];
    let correctPriceForCurrentProduct = menu[currentProduct];
    if (soldPrice[i] !== correctPriceForCurrentProduct) {
      counter++;
    }
  }
  return counter;
}
// console.time("testfunction");
// console.log(testfunction(products, productPrices, productSold, soldPrice));
// console.timeEnd("testfunction");
console.time("secondWay");
console.log(secondWay(products, productPrices, productSold, soldPrice));
console.timeEnd("secondWay");
