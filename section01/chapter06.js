// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
// let strToNum2 = Number(str2);  -> NaN이 뜸. 문자열이기 때문
let strToNum2 = parseInt(str2); //이걸 방지하기 위해 parseInt를 사용하면 숫자값만 변환되게 할 수 있다.
// 하지만 앞에 문자가 있고 그 뒤에 숫자가 나오면 형 변환이 제대로 이루어지지 않을 수 있다.

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
