// var => 함수레벨 스코프
function func() {
  if (true) {
    var a = "a";
    console.log(a);
  }
  console.log(a);
}

// let, const => block 레벨 스코프
function func2() {
  if (true) {
    const a = "a";
    console.log(a);
  }
  // 블록 밖에서는 참조 불가능
  // console.log(a);
}

func();
func2();
