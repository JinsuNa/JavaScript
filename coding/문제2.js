// const { log } = require("console");
let fs = require("fs"); //fs : file system의 약자

let input = fs
  .readFileSync("./data/문제2_세자리곱셈.txt")
  .toString()
  .split("\n");
let firstInput = parseInt(input[0]);
console.log("    " + firstInput);
let secondInput = parseInt(input[1]);
console.log("x   " + secondInput);
console.log("--------------- ");

let input1 = fs
  .readFileSync("./data/문제2_세자리곱셈.txt")
  .toString()
  .split("\n");
input1 = input1[0].split(" ").map(Number) * input1[1][2].split(" ").map(Number);
console.log("   " + input1);

let input2 = fs
  .readFileSync("./data/문제2_세자리곱셈.txt")
  .toString()
  .split("\n");
input2 = input2[0].split(" ").map(Number) * input2[1][1].split(" ").map(Number);
console.log("  " + input2);

let input3 = fs
  .readFileSync("./data/문제2_세자리곱셈.txt")
  .toString()
  .split("\n");

input3 = input3[0].split(" ").map(Number) * input3[1][0].split(" ").map(Number);
console.log(" " + input3);
console.log("--------------- ");

let result = input.reduce((x, y) => x * y);
console.log(result);
