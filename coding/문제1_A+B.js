const { log } = require("console");
let fs = require("fs"); //fs : file system의 약자

let input = fs.readFileSync("./data/문제1_A+B.txt").toString().split("\n");
input = input[0].split(" ").map(Number);
console.log(input);

console.log(input.reduce((x, y) => x + y));
