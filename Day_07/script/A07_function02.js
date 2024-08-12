// ----------- 1 ) 매개변수의 위치에 ... 연산자 사용하기
// ... 연산자는 전달한 모든 데이터를 배열의 형태로 받는 문법
function add(a, b, ...c) {
    if (arguments.length != 2) return;
    console.log(a);
    console.log(b);
    console.log(c);                 // 배열로 받아짐 (나머지!!)
    console.log('배열로 받은 데이터의 개수: ' + c.length); // c로 받은 데이터 개수 추출
    console.log(arguments);         // 전체! 전달된 데이터의 개수를 갖고 있는 내부 속성(property) 값, 여기서 n개만 전달해 달라고 요청(설정) 가능 
    return a + b;
}

let result = add(10, 20);
// console.log("합계의 결과-1 " + result);

//let result = add(10, 20, 30, 40, 50);
// console.log("합계의 결과-2 " + result);


// ----------- 2 ) 함수를 반환하는 함수
function temp() {
    return function () {
        console.log(2 * 3);
    }
}

let x = temp();
x();        //6 출력


temp()();  // 6;

// ----------- 3 ) 함수를 반환하는 함수 - 2
function temp2(a, b) {
    let result = a * b;
    console.log(result);

    return function () {
        return result;
    }
};
console.log('확인');
console.log(temp2(5, 7)());
