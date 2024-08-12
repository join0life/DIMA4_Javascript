// 1) 선언적 함수의 생김새
function one(x, y) {
    return x - y;
}

let oneResult = one(11, 12);
console.log(oneResult);

// 2) 표현적 함수의 생김새 (함수 리터럴이 변수에 대입)
let two = function (x, y) {
    return x * y;
};

console.log(two(10, 12));

// 3) 화살표 함수
//   - 함수 리터럴(표현적 함수)을 다른 방식으로 표기한 것.
//   (1) function 키워드를 지운다.
//   (2) ) { 사이에 =>를 삽입
//   (3) 함수의 body 부분인 {} 안에 코드가 1줄이면 {} 생략
//   (4) return 키워드를 지운다.
//   (5) 매개변수가 1개일 때에는 () 생략 가능
//   (6) 매개변수가 0개일 때에는 () 생략 불가
//   (7) 매개변수가 값을 디폴트 값으로 처리할 수 있다.
//       디폴트 값은 오른쪽에서부터 채워져야 함!
let three = (x, y) => x * y;

// (예) 아래의 함수를 화살표함수로 변경하시오.
let four = function (a) {
    return a ** 3;
};

four = (a) => a ** 3;
// (예) 6번의 예
// setInterval(function () {
//     console.log('아무 값을 출력');
// }, 1000);

// 위 코드를 화살표 함수로 변경
// setInterval(() => console.log('아무 값을 출력'), 1000);

function five(a, b, c = 5) { // 디폴트 파라미터는 오른쪽부터 채워야 함
    return a * b * c;
}

let result = five(1, 2, 7); // 디폴트 파라미터가 있어도 전달된 값이 우선
console.log('five 함수의 결과 : ' + result); // 디폴트 파라미터가 없으면 NaN이 출력

// 디폴트 파라미터를 화살표 함수에 적용
let six = (x, y = 10) => console.log(`${x} + ${y} = ${x + y}`);
six(10, 20);
six(8);

/* [연습문제] html문서 내에 있는 div.box의 데이터를 가져와서
첫 번째 요소는 화면 여기 저기에 나타나도록 한다.
1초에 한 번씩 위치를 이동. 화살표 함수를 사용할 것
*/

let items = document.getElementsByClassName('box');
let firstItem = items[0];

function moveItem() {
    let lft = Math.floor(Math.random() * 1000);
    let tp = Math.floor(Math.random() * 500);

    firstItem.style.top = tp + 'px';
    firstItem.style.left = lft + 'px';
}

setInterval(() => {
    moveItem();
}, 1000);

// 두 번째 상자를 얻어오기
let boxes = document.getElementsByTagName("div");
let box = boxes[1];

let w = box.style.width;
let h = box.style.height;

setInterval(() => {
    box.style.width = ++w + 'px';
    box.style.height = ++h + 'px';
}, 50);

