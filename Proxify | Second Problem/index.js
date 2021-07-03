import { readFileSync } from "fs";
import https from "https";

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

let [date] = input;

function getStockInformation(date) {
  const baseURL = "https://jsonmock.hackerrank.com/api/stocks?date=";
  const dateURL = baseURL.concat(date);

  https
    .get(dateURL, (response) => {
      let data = "";

      // called when a data chunk is received.
      response.on("data", (chunk) => {
        data += chunk;
      });

      // called when the complete response is received.
      response.on("end", () => {
        let out = JSON.parse(data).data[0];
        // console.log(out);
        for (let line in out) {
          // console.log(typeof line);
          process.stdout.write(`${line}: ${out[line]}\n`);
        }
        // console.log(JSON.parse(data).data[0]);
      });
    })
    .on("error", (error) => {
      console.log("Error: " + error.message);
    });
}
console.time("getStockInformation");
console.log(getStockInformation(date));
console.timeEnd("getStockInformation");
