// 산술 연산자
console.log("==================");
console.log(10 + 10);
console.log(7 % 3);

// 증강 연산자
console.log("==================");
let number = 1;
number++;
console.log(number);

// 간단 타입변환
console.log("==================");
let sample = "99";
console.log(typeof sample);
console.log(+sample);
console.log(typeof +sample);

// 비교 연산자
console.log("==================");
console.log(3 == 4); //false
console.log("3 == 4 : " + 3 == 4); //false
console.log("4" == 4); //true
console.log("3" == "3"); //true
console.log("4" === 4); //false

// 삼항 연산자
console.log("==================");
console.log(10 > 0 ? "10은 0보다 크다." : "그렇지 않다.");

// 단축평가 - 많이 씀 일반적으로 문자가 오면 true로 본다.
console.log("==================");
console.log(true || "아이브");
console.log(false || "아이브");
console.log(false ? "아이브" : "true");

console.log("==================");
console.log(false && "뉴진스");
console.log(true && "뉴진스");

console.log("==================");
console.log(true && true && "아일릿");
console.log(true && false && "아일릿");

console.log("==================");
let name;
console.log(name);

name = name ?? "나진수";
console.log(name);

name = name && "아이브";
console.log(name);

name = "아이린" && "아이브";
console.log(name);

name = null && "나진수";
console.log(name);

name = 0 && "나진수";
console.log(name);

name = 100 && "나진수";
console.log(name);

name = '' && "나진수";
console.log(name);
// 스크립트에서 false로 보는 아이들 .
// false, null, 0, undefined,''(공백) 전부 false로 본다. *하지만 ' ' 스페이스가 한개 들어간 공백은 true로 들어간다.
