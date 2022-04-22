let [p, d, m, s] = [100, 19, 1, 180];

(function howManyGames(p, d, m, s) {
  let count = 0;
  for (let i = p; i >= m && s > 0; i -= d) {
    s -= i;
    s > 0 ? count++ : void 0;
  }
  let rest = s > 0 ? Math.floor(s / m) : 0;
  console.log(count + rest);
})(p, d, m, s);
