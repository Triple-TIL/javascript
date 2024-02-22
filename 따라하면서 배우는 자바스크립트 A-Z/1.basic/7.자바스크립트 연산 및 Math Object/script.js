const n1 = 20;
const n2 = 10;

let val;

val = n1 + n2;
console.log(val); // 30
val = n1 * n2;
console.log(val); // 200
val = n1 - n2;
console.log(val); // 10
val = n1 / n2;
console.log(val); // 2
val = n1 % n2;
console.log(val); // 0

val = Math.E;
console.log(val); // 2.718281828459045
val = Math.PI;
console.log(val); // 3.141592653589793
val = Math.round(2.4);
console.log(val); // 2
val = Math.ceil(2.4);
console.log(val); // 3
val = Math.floor(2.8);
console.log(val); // 2
val = Math.abs(-2);
console.log(val); // 2
val = Math.min(2, 3, 4, 5, 65, 6, 34, 4, -1);
console.log(val); // -1
val = Math.max(2, 3, 4, 5, 65, 6, 34, 4, -1);
console.log(val); // 65
val = Math.random();
console.log(val); // 0 ~ 1 사이의 랜덤

val = Math.floor(Math.random() * 20 + 1); // 1~20 랜덤값
