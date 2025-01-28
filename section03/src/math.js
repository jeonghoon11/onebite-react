// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// common.js 사용
// module.exports = {
//   add, // add: add
//   sub, // sub: sub 이처럼 key와 value가 같으면 sub,로 나타내도 된다.
// };

// export { add, sub };
