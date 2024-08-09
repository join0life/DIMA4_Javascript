/*
1) 함수의 정의 (선언함수)
function 함수명([파라미터 선언부]) {
    실행문;
    [return 데이터];
}

2) 호출(Call)
함수명([아규먼트]);

3) 함수의 정의 (표현함수)
let 변수명 = function([파라미터 선언부]) {
    실행문;
    [return 데이터];
}

4) 호출(Call)
변수명([아규먼트]);
*/

// 첫 번째 예제
function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

// let temp = plus; 
// temp(10, 20); 

function proxy(func, a, b) {
    return func(a, b);
}

let result = proxy(plus, 11, 21);
console.log(`결과 : ${result}`);

result = proxy(minus, 11, 21);
console.log(`결과 : ${result}`);

// 2) DOM에 접근하는 함수+
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let clock = document.getElementById("clock");

// 시스템 시간을 얻어오는 함수
function makeHour() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let data = `<span style="color:red;">${hour}시 ${min}분 ${sec}초 </span>`;
    clock.innerHTML = data;
}

// makeHour(); // 이벤트와 상관없이 시간을 화면에 출력
let timer = '';
start.addEventListener('click', function () {
    makeHour();
    timer = setInterval(function () { // setInterval의 id(변수)는 전역 공간(함수 밖)에 선언
        makeHour();
    }, 1000);
});

stop.addEventListener('click', function () {
    clearInterval(timer);
    alert("시간이 멈췄습니다.");
});




