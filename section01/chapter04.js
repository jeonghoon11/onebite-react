// 1. 변수
let age;

age = 30;

// 2. 상수 -> 선언과 동시에 초기화 필수.
const birth = "1997.01.07";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다. (예약어 : 자바스크립트가 이미 특수한 의미로 사용하기로 약속한 변수 ex) let, const)

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totlalSalesCount = salesCount - refundCount;
