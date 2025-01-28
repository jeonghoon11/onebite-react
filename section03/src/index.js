// const moduleData = require("./math");
// 위 코드를 구조분해할당을 이용하면
// const { add, sub } = require("./math");
import mul, { add, sub } from "./math.js";

import randomcolor from "randomcolor";

const color = randomcolor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
