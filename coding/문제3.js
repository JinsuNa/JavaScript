let fs = require("fs"); //fs : file system의 약자

let input = fs.readFileSync("./data/문제3_시험성적.txt").toString().split("\n");

console.log(input);

let grade = parseInt(input[0]);
console.log(grade);

if (grade >= 90 && grade <= 100) {
  console.log(grade + "점 입니다. 성적은 A입니다.");
} else if (grade >= 80 && grade <= 89) {
  console.log(grade + "점 입니다. 성적은 B입니다.");
} else if (grade >= 70 && grade <= 79) {
  console.log(grade + "점 입니다. 성적은 C입니다.");
} else if (grade >= 60 && grade <= 69) {
  console.log(grade + "점 입니다. 성적은 D입니다.");
} else if (grade < 60) {
  console.log(grade + "점 입니다. 성적은 F입니다.");
} else {
  console.log("0~100 까지의 점수를 입력해주세요.");
}
