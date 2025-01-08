// 1. 구구단 출력

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
    console.log("============");
  }
}

// 2. 별찍기
//      #
//     ###
//    #####
//   #######

// for (let i = 0; i < star.length; i++) {
//   console.log(star[i]);
// }

// let starview = "";
// let totalStar = 4;
// for (let i = 0; i < totalStar; i++) {
//   for (let j = 0; j < totalStar.length; i++) {
//     starview += "*";
//     console.log(starview);
//   }
// }

let totalRows = 4; // 층 수

for (let i = 0; i < totalRows; i++) {
  let line = ""; // 현재 줄을 구성할 변수
  
  // 공백 추가 (총 층 수 - 현재 줄 번호 - 1)
  for (let j = 0; j < totalRows - i - 1; j++) {
    line += " ";
  }
  
  // 별 추가 (현재 줄 번호 * 2 + 1)
  for (let k = 0; k < i * 2 + 1; k++) {
    line += "#";
  }
  
  // 현재 줄 출력
  console.log(line);
}