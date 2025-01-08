const { log } = require("console");
const { reverse } = require("dns");
let fs = require("fs"); // fs : file system의 약자

let input = fs.readFileSync("./data/문제9_상수.txt").toString().split("\n");

input = input[0].split("").reverse().join("");
console.log(input);

input = input.split(" ").map(Number);
console.log(input);

let result = input.reduce((x, y) => Math.max(x,y));
console.log(result);

// 두수를 우선 뒤에서부터 전부 바꾼다음, sort로 정렬하여 출력하면 된다.
// 근데 두수의 자리를 전부 바꾸는건 어떻게??
