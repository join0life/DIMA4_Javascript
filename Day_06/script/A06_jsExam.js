// 난수 발생하기
let theBody = document.getElementById("theBody");

function getRandomColor() {
    let red = Math.floor(Math.random() * 256); // floor : 버림
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return red, green, blue;
}

let cnt = 0;
function changeColor() {
    let color = getRandomColor();
    theBody.style.backgroundColor = color[cnt];
    cnt++;
    if (cnt >= color.length) cnt = 0;
}

let timer = '';
theBody.addEventListener('click', function () {
    changeColor();
    timer = setInterval(function () {
        changeColor();
    }, 5000);
});




