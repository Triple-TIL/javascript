for (let i = 0; i < 10; i++) {
  if (i == 3) {
    console.log("It is 3");
    continue;
  }
  if (i == 5) {
    console.log("5 Stop the loop");
    break;
  }
  console.log("Number: " + i);
}

const user = {
  name: "John",
  province: "경기도",
  city: "성남시",
};
// 객체의 속성을 따라 반복한다.
for (let x in user) {
  console.log(`${x}: ${user[x]}`);
}

let i = 0;
while (i < 10) {
  console.log("Number: " + i);
  i++;
}

let v = 100;
do {
  console.log("Number: " + v);
  v++;
} while (v < 10);
