// 이벤트 소스
let check = document.getElementById("check");

// 이벤트 타겟
let userid = document.getElementById("userid");
let birthday = document.getElementById("birthday");

// 이벤트 소스와 이벤트 핸들러를 연결
check.addEventListener('click', validation);

// 이벤트 핸들러
function validation() {
    // alert("경고"); // 이벤트 소스와 이벤트 핸들러가 잘 연결되었는지 확인
    let id = userid.value; // userid 값
    if (id.includes(' ')) {
        alert("아이디는 한 단어로 입력하시오");
        userid.focus();
        userid.value = ""
        return;
    }
    if (!(id.trim().length >= 5 && id.trim().length <= 10)) {
        alert("5~10 글자로 정확히 입력하시오");
        userid.focus(); // 커서를 userid 란에
        userid.select(); // 값을 선택
        // select를 하면 굳이 focus를 하지 않아도 됨
        return;
    }

    let birth = birthday.value;
    if (birth.length != 8 || isNaN(birth)) {
        alert("생년월일을 숫자 8자리로 입력하시오");
        birthday.focus();
        birthday.value = "";
        return;
    }
    alert("아이디: " + id + "\n생년월일: " + birth);
}