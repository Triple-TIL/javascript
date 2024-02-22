let val;

val = 111;

console.log(val); // 111
console.log(typeof val);

val = String(111);
console.log(val); // '111'
console.log(typeof val);
val = String(8 + 4);
console.log(val); // '12'
console.log(typeof val);
console.log(val.length);

val = false;
console.log(val); // false
console.log(typeof val);
console.log(val.length);

val = new Date();
console.log(val);
console.log(typeof val);
console.log(val.length);

val = String([1, 2, 3, 4, 5]);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = (5).toString();
console.log(val); // 5
console.log(typeof val);
console.log(val.length);

val = Number("1");
console.log(val); // 1
val = Number(true);
console.log(val); // 1
val = Number(false);
console.log(val); // 0
val = Number(null);
console.log(val); // 0
val = Number([1, 2, 3]);
console.log(val); // Nan

val = parseInt("111.40");
console.log(val); // 111
val = parseFloat("111.40");
console.log(val); // 111.4

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
