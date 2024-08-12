// 1. ary 안에 1~100 사이의 정수 10개를 발생시켜 추가한다.
// 2. 그 중에 홀수인 데이터만 찾아서 새로운 배열에 다시 추가
let ary = [];
let idx = [];

for (let i = 0; i < 10; ++i) {
    ary.push(Math.ceil((Math.random() * 100)));
    // if (ary[i] % 2 != 0) idx.push(i);
}
ary.forEach((item, index) => {
    if (item % 2) idx.push(index); // 0이 false니까 true로 바꾸는 과정을 추가
})

console.log(ary);
console.log(idx);
