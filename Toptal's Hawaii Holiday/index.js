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

let [year, hStart, hEnd, yearStartsOn] = input;

// year - integer in range [2001-2099]
// hStart - 3-letter name of month on which the holiday starts
// hEnd - month, holiday ends on
// yearStartsOn - 3-letter day kicking off that year

// given the variables, find out the amount of weeks
// one can stay on Hawaii, provided there are only flights
// to Hawaii on Mondays and the flights back arrive on Sundays

function solution([year], [hStart], [hEnd], [yearStartsOn]) {
  let febLn = year % 4 ? 28 : 29;
  let allMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let monLn = [31, febLn, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  let lastDayOfPrevYear =
    allDays.indexOf(yearStartsOn) - 1 >= 0
      ? allDays.indexOf(yearStartsOn) - 1
      : 6;
  let namedYear = monLn.reduce((acc, curr, iter) => {
    let month = [];
    for (let i = 0; i < curr; i++) {
      let startDay =
        allDays.indexOf(acc[acc.length - 1]) >= 0
          ? allDays.indexOf(acc[acc.length - 1]) + 1
          : lastDayOfPrevYear + 1;
      month.push(allDays[(i + startDay) % 7]);
    }
    // console.log(month);
    return [...acc, ...month];
  }, []);
  let daysTillHStart = 0;
  let daysTillHEnd = 0;
  for (let i = 0; i < allMonths.indexOf(hStart); i++) {
    daysTillHStart += monLn[i];
  }
  for (let i = 0; i < allMonths.indexOf(hEnd) + 1; i++) {
    daysTillHEnd += monLn[i];
  }
  // console.log(daysTillHEnd);
  let firstDayOfH = namedYear[daysTillHStart];
  let lastDayOfH = namedYear[daysTillHEnd - 1];
  // console.log(firstDayOfH, lastDayOfH);
  let daysOfH = daysTillHEnd - daysTillHStart;
  if (firstDayOfH !== "Mon") {
    daysOfH -= 7 - allDays.indexOf(firstDayOfH);
  }
  if (lastDayOfH !== "Sun") {
    daysOfH -= allDays.indexOf(lastDayOfH) + 1;
  }
  return daysOfH / 7;
}
console.time("solution");
console.log(solution(year, hStart, hEnd, yearStartsOn));
console.timeEnd("solution");
