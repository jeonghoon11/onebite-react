// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) key : value 순.
let person = {
  name: "이정환", //name 프로퍼티
  age: 27, //age 프로퍼티
  hobby: "테니스", //hobby 프로퍼티 이런 식으로 불림.
  job: "FE Developer",
  extra: {}, //객체로 프로퍼티를 만들어도 됨.
  10: 20, //숫자가 들어올 수 있다.
  "like cat": true, //두 단어 이상은 ""로 묶는다.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; //간단하게 사용.

let age = person["age"]; //""와 함께 문자열로 작성해야 함. 동적으로 프로퍼티를 변화시키며 가져올 때 사용.

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["job"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result2);
