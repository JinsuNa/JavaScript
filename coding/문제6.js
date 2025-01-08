let fs = require("fs"); // fs : file system의 약자

let input = fs.readFileSync("./data/문제6_평균.txt").toString().split("\n");

// 각 줄의 합계 계산
for (let i = 1; i < input.length; i++) {
  let numbers = input[i].split(" ").map(Number);
  let studentCount = numbers[0];
  let scores = numbers.slice(1);

  //평균점수
  let totalScore = scores.reduce((x, y) => x + y, 0);
  let avg = totalScore / studentCount;

  //평균 점수 넘는 학생 구하기
  let avgCount = scores.filter((x) => x > avg).length;

  //평균점수 넘는 비율 구해 소수점 4자리에서 반올림하여 출력하기
  let studentAvg = ((avgCount / studentCount) * 100).toFixed(3);
  console.log(studentAvg);
}
