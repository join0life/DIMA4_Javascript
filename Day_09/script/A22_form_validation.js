"use strict"; // 문법을 엄격하게 검토

// 이벤트 소스 얻어오기
document.getElementById("join").addEventListener('click', joinCheck);
document.getElementById("userid").addEventListener('keyup', idCheck); // press + release 
document.getElementById("email2").addEventListener('change', emailCheck);


// 이벤트 핸들러
function idCheck() {
    let userid = document.getElementById("userid");
    let idcheck = document.getElementById("idcheck")
    if (userid.value.trim().length < 3 || userid.value.trim().length > 5) {
        idcheck.style.color = "red";
        idcheck.innerText = "아이디는 영문, 숫자포함 3~5 글자로 입력해주세요.";
        return;
    }
    // 
    idcheck.innerText = "";

}


function joinCheck() {
    // 1) 이름 길이 체크
    let username = document.getElementById("username");
    if (username.value.trim().length < 3 || username.value.trim().length > 5) {
        alert("이름은 실명으로 3~5 글자로 입력해주세요.");
        username.select();
        return;
    }
    // 2) 아이디 길이 체크
    let userid = document.getElementById("userid");
    if (userid.value.trim().length < 3 || userid.value.trim().length > 5) {
        alert("아이디는 영문, 숫자포함 3~5 글자로 입력해주세요.");
        userid.select();
        return;
    }
    // 3) 패스워드 길이 체크
    let userpwd = document.getElementById("userpwd");
    // userpwdcheck.value=""; // 비동기통신으로 각각 체크할 때에는 있는게 좋음 
    if (userpwd.value.trim().length < 3 || userpwd.value.trim().length > 5) {
        alert("비밀번호는 영문, 숫자포함 3~5 글자로 입력해주세요.");
        userpwd.select();
        return;
    }
    // 4) 패스워드 확인 체크
    let userpwdcheck = document.getElementById("userpwdcheck");
    if (userpwd.value.trim() != userpwdcheck.value.trim()) {
        alert("비밀번호는 비밀번호 확인값과 같아야 합니다.");
        userpwdcheck.value = "";
        userpwdcheck.focus();
        return;
    }

    // 5-1) 전화번호 맨 앞자리 얻어오기
    let phone1 = document.getElementById("phone1").value; // 문자열 얻어냄 

    // 5-2) 전화번호 중간자리 얻어오기
    let phone2 = document.getElementById("phone2"); // 태그를 얻어냄 
    if (isNaN(phone2.value) || phone2.value.trim().length != 3) {
        alert("전화번호를 정확히 입력해주세요.");
        phone2.select();
        return;
    }

    // 5-3) 전화번호 마지막 자리 얻어오기
    let phone3 = document.getElementById("phone3"); // 태그를 얻어냄 
    if (isNaN(phone3.value) || phone3.value.trim().length != 4) {
        alert("전화번호를 정확히 입력해주세요.");
        phone3.select();
        return;
    }
    let phone = phone1 + phone2.value + phone3.value;

    // 6-1) 이메일 앞자리 얻어오기
    let email1 = document.getElementById("email1");
    if (email1.value.trim().length == 0) {
        alert("이메일을 정확히 입력해주세요.");
        email1.select();
        return;
    }
    // 이메일 가운데 자리 처리하는 부분은 emailCheck 함수로 전이
    // 6-3) 이메일 마지막 자리 얻어오기
    let email3 = document.getElementById("email3");
    if (email3.value.trim().length == 0) {
        alert("이메일을 정확히 입력해주세요.");
        email3.select();
        return;
    }

    let email = email1.value + '@' + email3.value;

    // 7) 주소 + 상세주소부분 얻어오기
    let addr1 = document.getElementById("addr1").value;
    let addr2 = document.getElementById("addr2");

    if (addr2.value.trim().length == 0) {
        alert("상세주소를 입력하세요.");
        addr2.focus();
        return;
    }
    let address = `${addr1} ${addr2.value}`;

    // 8) 사이트를 알게 된 경로 : 체크박스이기 때문에 여러 개 선택 가능
    // let p = document.querySelectorAll("input[type='checkbox']:path.checked"); 
    let p = document.querySelectorAll("input[name='path']:checked");
    let path = '';
    p.forEach(function (item) {
        if (item.value)
            path += item.value + " ";
    });

    // 9) 수신 여부 확인
    let receive = document.querySelector("input[type='radio'].receive:checked").value;
    // let receive = document.querySelector("input[name='receive']:checked").value;
    // :checked -> 체크 표시된 항목

    // 10) 수신 동의 확인
    let kakao = document.querySelector("input[name='kakaotalk']:checked");
    let kakaoreceive = false;
    if (kakao == null) {
        kakaoreceive = false;
    } else {
        kakaoreceive = true;
    }

    // 최종 결과물을 출력하는 코드
    let finalResult = '<h2>[최종 결과]</h2><ul> ';
    finalResult += `<li>이름 : ${username.value}</li>`;
    finalResult += `<li>아이디 : ${userid.value}</li>`;
    finalResult += `<li>비밀번호 : ${userpwd.value}</li>`;
    finalResult += `<li>연락처 : ${phone}</li>`;
    finalResult += `<li>이메일 : ${email}</li>`;
    finalResult += `<li>주소 : ${address}</li>`;
    finalResult += `<li>알게 된 경로 : ${path}</li>`;
    finalResult += `<li>이메일 수신 : ${receive}</li>`;
    finalResult += `<li>카카오톡 수신 동의 : ${kakaoreceive ? "동의" : "미동의"}</li>`;
    finalResult += '</ul>';

    document.getElementById("final").innerHTML = finalResult;
}

// 이메일 중간 부분의 상태가 변화되면 실행되는 event handler 함수
function emailCheck() {
    // 6-1) 이메일 가운데 자리 얻어오기
    let email2 = document.getElementById("email2");
    // 사용자가 이메일을 다른 사이트로 선택했을 경우 그 값을 email3에 넣는다. 
    if (email2.value.length != 0) {
        document.getElementById("email3").value = email2.value;
    } else {
        document.getElementById("email3").value = "";
        document.getElementById("email3").focus();
    }
}

