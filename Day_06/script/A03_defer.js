// 1) defer 없는 상태의 스크립트 코드가 실행되었을 때
let btn = document.getElementById("btn"); // HTML Object
let del = document.getElementById("del"); // HTML Object
let printImg = document.getElementById("printImg"); // HTML Object
let printStar = document.getElementById("printStar");
// console.log(btn);

btn.onclick = write;
del.onclick = remove;
printImg.onclick = star;
printStar.onclick = drawStar;

function write() {
    let result = document.getElementById("result"); // div#result에 접근
    let data = "<h3 style='color:red;'>클릭했습니다.</h3>";

    result.innerHTML = data;
}

function remove() {
    let result = document.getElementById("result"); // div#result에 접근
    result.innerHTML = "";
}

function star() {
    let result = document.getElementById("result"); // div#result에 접근
    let data = '<img src = "../images/bear.png" alt = "" ></img>';

    result.innerHTML = data;
}

function drawStar() {
    let result = document.getElementById("result"); // div#result에 접근
    let data = '';
    for (let i = 0; i < 5; ++i) {
        for (let j = 0; j < (i + 1); ++j)
            data += "*";
        data += "<br>";
    }
    result.innerHTML = data; // 끝태그가 없으면 innerHTML 사용할 수 없다.
}
