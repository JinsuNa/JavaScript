let fs = require("fs"); //fs : file system의 약자

let input = fs.readFileSync("./data/문제5_최대값인덱스.txt").toString().split("\n");

console.log(input);

let max=0;
let maxFindIndex;
for(let i = 0; i<input.length;i++){
   if(input[i]>max){
    max = input[i];
    maxFindIndex = i+1;
   }
}
console.log(max);
console.log(maxFindIndex);


