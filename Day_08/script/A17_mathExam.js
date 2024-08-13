// 이벤트 소스
let plus = document.getElementById("plus");
let clear = document.getElementById("clear");

// 이벤트 타겟
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");

// 이벤트 소스와 이벤트 핸들러를 연결
plus.addEventListener('click', add);
clear.addEventListener('click', clearAll);

function add() {
    let n1 = num1.value;
    let n2 = num2.value;

    if (isNaN(n1) || n1.trim().length == 0) {
        alert("숫자를 정확히 입력하세요");
        clearAll(); // 함수 호출
        num1.focus();
        return;
    }

    if (isNaN(n2) || n2.trim().length == 0) {
        alert("숫자를 정확히 입력하세요");
        clearAll();
        num1.focus();
        return;
    }

    n1 = parseInt(n1); // n1의 값이 숫자(정수)로 변경
    n2 = parseInt(n2);
    result.value = (n1 + n2);

    document.getElementById("result").value = result.value;
}
function clearAll() {
    num1.value = "";
    num2.value = "";
    result.value = "";
}

// RW가 가능
// innerHTML : 시작태그와 끝태그 사이에 태그를 삽입
// innerText : 시작태그와 끝태그 사이에 문자열을 삽입
// value : 폼 태그의 데이터를 읽어오거나 쓴다