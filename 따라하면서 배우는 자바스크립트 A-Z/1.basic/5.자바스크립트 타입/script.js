let foo = 42;
console.log(typeof foo); // number

foo = "bar";
console.log(typeof foo); // string

// 원시타입
// String
const name = "han";
// Number
const age = 30;
// Boolean
const hasJob = true;
// null -> 항상 소문자로 써야함
const car = null;
// undefined
let anything;
// Symbol = 유니크한 값
const sym = Symbol();

// 참조타입
// Array 배열
const hobbies = ["walking", "books"];
// Object 객체
const address = {
  province: "경기도",
  city: "성남시",
};

console.log(typeof address); // object
console.log(typeof hobbies); // object

// array 인지 확인하는 방법
console.log(Array.isArray(hobbies));
