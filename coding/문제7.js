let fs = require("fs"); // fs : file system의 약자

let input = fs.readFileSync("./data/문제7_평균조작.txt").toString().split("\n");

let max = input[1].split(" ").map(Number);
let maxScore = max.reduce((x, y) => Math.max(x, y));

let totalScore = 0;
for (let i = 0; i < max.length; i++) {
  let score = ((max[i] / maxScore) * 100).toFixed(0);
  totalScore += parseInt(score);

}

totalScore = (totalScore/max.length);
console.log(totalScore);
