// 1. 콜백함수
function main(value) {
  value();
}

main(() => {
  //   console.log("I am sub");
});

// 2. 콜백함수의 활용 ->중복을 제거하고 코드를 간결하게 사용할 수 있다. 꼭 익혀두기.
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
