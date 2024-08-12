// 서버에서 받은 데이터
// 분해해서 table로 만들어 html 문서에 출력하시오.
// 자격증이 없는 사람은 '없음'이라고 나오게 할 것.

let receivedData = [
    { id: '001', name: '홍길동', license: '정보처리기사' }
    , { id: '002', name: '임꺽정', license: '빅데이터 분석기사' }
    , { id: '003', name: '전우치', license: 'ADsP' }
    , { id: '004', name: '손오공' }
    , { id: '005', name: '사오정', license: '운전면허증' }
];


let data = `<table border="1">
        <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>보유자격증</th>
        </tr>`

receivedData.forEach((item) => {
    let { id, name, license = "없음" } = item;
    data += `<tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${license}</td>
    </tr>`;
});
data += `</table>`
console.log(data);

document.getElementById("result").innerHTML = data;