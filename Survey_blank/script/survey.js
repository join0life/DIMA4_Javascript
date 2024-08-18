"use strict";

document.getElementById("submit").addEventListener('click', submitCheck);

function submitCheck() {
    // 1) 이름 체크
    let username = document.getElementById("username");
    if (username.value.trim() == "") {
        alert("이름을 입력하세요")
        username.focus();
        return;
    }

    // 2) 전화번호 체크
    let phone1 = document.getElementById("phonenum1");
    let phone2 = document.getElementById("phonenum2");
    if (isNaN(phone2.value) || phone2.value.trim().length !=8) {
        alert("-를 제외한 정확한 길이의 숫자만 입력해주세요");
        phone2.select();
        return;
    }
    let phone = phone1.value + phone2.value;

    // 3) 이메일 체크
    let email = document.getElementById("email");
    if (!(email.value.includes('@'))) {
        alert("정확한 이메일타입으로 입력해 주세요");
        email.select();
        return;
    }

    // 4) 직업
    let job = document.getElementById("job").value;
    
    // 5) 가장 많이 사용하는 구글 서비스
    let service = document.querySelector("input[name='service']:checked").value;

    // 6) 체크박스
    let ckbox = document.querySelectorAll("input[name='ckbox']:checked");
    let func = '';
    ckbox.forEach(function (item) {
      if(item.value)
        func += item.value + " ";
    })

  // 7) 남기실 말씀
  let etc = document.getElementById("etc").value;

    // 최종 결과물을 출력하는 코드
  let result = "<h2>설문 결과</h2><ul>";
  result += `<li>이름 : ${username.value}</li>`;
  result += `<li>전화번호 : ${phone}</li>`;
  result += `<li>Email : ${email.value}</li>`;
  result += `<li>직업 : ${job}</li>`;
  result += `<li>가장 많이 사용하는 구글 서비스 : ${service}</li>`;
  result += `<li>기능강화가 필요한 도구 : ${func}</li>`;
  result += `<li>남기실 말씀 : ${etc}</li>`;
  result += '</ul>';

  document.getElementById("result").innerHTML = result;
}
