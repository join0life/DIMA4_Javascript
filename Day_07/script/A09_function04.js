let ary = [10, 11, 100, 101, 1000];
console.log('배열의 크기 : ' + ary.length);

// 1) forEach()로 배열의 모든 데이터에 접근해 합계 구하기
let total = 0;
ary.forEach(function (item, index, ary) {
    // console.log(item + ', ' + index + ', ' + ary);
    total += item;
});

console.log('배열의 총합1 : ' + total);

// 위 예제를 화살표 함수로 변경
total = 0;
ary.forEach(item => total += item);
console.log('배열의 총합2 : ' + total);

// ----------------
/*
    map() : 배열의 요소를 변경
    배열 요소 전체를 순회. 그 결과값으로 새로운 배열을 만들어서 반환
    원본의 값은 변경하지 않는다.
*/

let result = ary.map((item) => item) * 2;
console.log("map으로 처리한 결과 : " + result);
console.log("원본: " + ary);

// ----------------
/*
    filter() : 배열 요소의 데이터를 필터링하여 원하는 데이터만 추출
    배열 요소 전체를 순회. 연산의 결과가 true인 데이터만 모아 그 요소들로 묶은 새로운 배열을 반환
    원본의 값은 변경하지 않는다.
*/

result = ary.filter(item => { if (item % 2 == 0) return true });
result = ary.filter(item => { if (item % 2) return !false });

console.log("filter로 처리한 결과:" + result);
console.log("원본: " + ary);
