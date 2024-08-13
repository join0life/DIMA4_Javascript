/*
DOM에 접근해서 객체를 받아오기
*/

// 1) getElementById("아이디값")
console.log('---------------- getElementById()');
let writer = document.getElementById("writer");
console.log(writer);

// 2) getElementsByTagName("태그명")
console.log('---------------- getElementsByTagName()');
let tags = document.getElementsByTagName("p")
console.log(tags.length);
console.log(tags);

// 3) getElementsByClassName("클래스명")
console.log('---------------- getElementsByClassName()');
let poem = document.getElementsByClassName("poem")
console.log(poem.length);
console.log(poem);

// 4) querySelector()
// 문서 내에 CSS 선택자에 맞는 데이터 한 개만 반환 (첫 번째꺼)
console.log('---------------- querySelector()');
let poem2 = document.querySelector(".poem");
console.log("poem2의 길이:" + poem2.length); // undefined
console.log("poem2의 내용:" + poem2);

// 5) querySelectorAll()
// 문서 내에 CSS 선택자에 맞는 데이터 여러 개 반환
// -getElementsByClassName() : HTMLCollections 타입으로 반환한다.
// -querySelectorAll() : nodeList 타입으로 반환
console.log('---------------- querySelectorAll()');
let poem3 = document.querySelectorAll(".poem");
console.log("poem3의 길이:" + poem3.length); // 2
console.log("poem3의 내용:" + poem3); // nodeList
console.log("poem3의 내용:" + poem3[0]); // 배열처럼 표현은 가능
poem3[0].style.color = 'red';
poem3[1].style.backgroundColor = 'cyan';

// 6) getAttribute("속성명"), setAttribute("속성명", "값")
// -HTML 요소의 특정 속성값을 조회(get)하거나, 치환(set)하는 메소드
console.log('---------------- getAttribute()');
let value = document.getElementById("image").getAttribute("src");
console.log(value);
console.log(document.getElementById("image").getAttribute("alt"));

// 다른 값으로 치환(set) - 이벤트 소스는 버튼이다!
document.getElementById("change").addEventListener('click', function () {
    document.getElementById("image").setAttribute("src", "../images/cat.jpg");
});

// 이벤트 소스가 그림
// 그림을 가져온다. --> 이벤트를 연결
document.getElementById("image").addEventListener('mouseenter', function () {
    document.getElementById("image").setAttribute("src", "../images/cat.jpg");
})

document.getElementById("image").addEventListener('mouseleave', function () {
    document.getElementById("image").setAttribute("src", "../images/rose.jpeg");
})
