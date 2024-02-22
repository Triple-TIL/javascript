console.log("안녕하세요!");
console.log(123);
console.log(true);

var greeting = "안녕하세요.";
console.log(greeting);

console.log({ a: "a", b: "b" });
console.table({ a: "a", b: "b" });
// 에러 경고 메시지
console.error("Error! 에러!");
console.warn("경고 warning!");

// 시간 재기 가능 time 객체 이름이 같아야 함
console.time("Hello");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.timeEnd("Hello");
// console 지우기
// console.clear();
