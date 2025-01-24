// 1. Number type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; //숫자 타입, 수치 연산이 실패했을 때 결과값으로 뜸.

// 2. String Type
let myName = "장정훈"; // 문자열을 ""로 묶지 않으면 변수명으로 인식.
let myLocation = "성북";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; //`으로 문자열을 만들면 $로 동적으로 문자열에 포함시킬 수 있다. -> 템플릿 리터럴 문법.

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type -> 변수를 선언하고 어떠한 값도 넣지 않았을 때 자동으로 지정
let none;
console.log(none);
