/*
    반복문 / 제어문
    1) 반복문 : while, do~while, for문
        - for 문은 3종류
        - continue, break
    2) 제어문: if, switch~case문
*/

// 1) 첫 번째 for문
let ary = [1, 2, 3, 4, 5];
for (let i = 0; i < ary.length; ++i) {
    console.log(ary[i]);
}

// 2) 두 번째 for문
console.log('------------- for~in 반복문 : 변수에는 인덱스가 추출됨 ----------')
for (let j in ary) {
    console.log(ary[j])
}

// 3) 세 번째 for문
console.log('------------- for~of 반복문 : 변수에 값이 추출됨 ----------')
let cities = ['서울', '도쿄', '뉴욕', '상하이'];
for (city of cities) {
    console.log(city)
}

// (연습문제) 1~50 까지 반복 3이나 5의 배수를 출력하는 코드를 작성하시오
console.log('--------- 1~50사이의 3, 5의 배수 출력');
for (let i = 0; i < 50; ++i) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i)
    }
};


// 연산 시 주의
let x = "10";
let result = 10 / x;  // 자동으로 parsing을 실시해서 연산
console.log(`문자열 "10"을 산술연산한 결과 : ${result}`);

let y = "10!";
let result2 = 10 / y;  // NaN(Not a Number)이므로 연산을 못함
console.log(`문자열 "10"을 산술연산한 결과 : ${result2}`);

// 0이 입력되거나, 아무것도 입력하지 않은 "" 상태이면? (Infinity)
// alert("경고문구") - 경고문구가 출력되고 "확인" 버튼
// prompt(), promt("메시지"), prompt("메시지", 초기값)
//  - 확인 : 입력한 값이 변수에 대입, 취소: null이 변수에 대입
// confirm("문구") - 문구가 출력되고 "확인"버튼, "취소"

// let z = "10!";
let z = prompt("숫자를 입력", "6");
if (isNaN(z))
    console.log("연산 불가");  //문자가 포함되어있으면 true
else {
    let result3 = 10 / z;
    console.log(`문자열 "${z}"을 산술연산한 결과 : ${result3}`);
}

// confirm() - true, false로 결과 반환
let cf = confirm("처리를 진행하까요?");
console.log(cf);