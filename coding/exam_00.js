// exam_00.txt 파일을 읽어서
// 배열에 넣은 후
// 큰 값을 출력

const { log } = require("console");
let fs = require("fs"); //fs : file system의 약자

let input = fs.readFileSync("./data/exam_00.txt").toString().split("\n");
console.log(input);

let count = input[0].split(" ").map(Number);
let data = input[1].split(" ").map(Number);
console.log(count);

console.log(data.reduce((x, y) => Math.max(x, y)));
