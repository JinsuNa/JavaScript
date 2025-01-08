let fs = require("fs"); //fs : file system의 약자

let input = fs.readFileSync("./data/문제4_최대최소.txt").toString().split("\n");

console.log(input[1]);

let arr = input[1].split(" ").map(Number);

console.log(arr);

arr.sort((x, y) => x - y);

let max = arr[arr.length-1];
let min = arr[0]

console.log(min + " " + max);

