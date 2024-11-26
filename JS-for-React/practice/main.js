// const arr = [1, 2, 3, 4, 5, 6];
// arr.forEach((val) => {
//   console.log(val);
// });

// func();
// function func() {
//   console.log("hello");
// }

// const func = () => {
//   console.log("Bye");
// };

// import sum from "./math";

// console.log(sum(1, 3));

// import add, { multiply } from "./math.js";
import * as math from "./math.js";

console.log(math.sum(1, 3));
console.log(math.multiply(1, 3));
