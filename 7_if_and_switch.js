//if 구문
let number = 5;
if (number % 2 === 0) {
  console.log(number + " 는 짝수입니다.");
} else {
  console.log(`${number}는 홀수입니다.`);
}

if (number % 2 === 0) {
  console.log(`${number}는 2의 배수입니다.`);
} else if (number % 3 === 0) {
  console.log(`${number}는 3의 배수입니다.`);
} else {
  console.log("모르겠습니다.");
}

//switch
let num = 3;
switch (num) {
  case 1:
    console.log("숫자가 1 입니다.");
    break;
  case 2:
    console.log("숫자가 2 입니다.");
    break;
  case 3:
    console.log("숫자가 3 입니다.");
    break;
  case 4:
    console.log("숫자가 4 입니다.");
    break;
  case 5:
    console.log("숫자가 5 입니다.");
    break;

  default:
    console.log("제대로된 숫자를 입력해라");

    break;
}
