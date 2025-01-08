const { log } = require("console");
let fs = require("fs"); // fs : file system의 약자

let input = fs
  .readFileSync("./data/문제8_문자열반복.txt")
  .toString()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  let line = input[i].split(" ");
  let repeatCount = parseInt(line[0]);
  let stringTorepeat = line[1];

  let result = "";
  let fuck = "";
  for (let j = 0; j < stringTorepeat.length; j++) {
    result += stringTorepeat[j].repeat(repeatCount);
    fuck = stringTorepeat[0].repeat(repeatCount);
  }
  console.log(result);
  console.log(fuck);
}
