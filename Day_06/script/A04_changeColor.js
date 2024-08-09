// event source
let btn = document.getElementById("btn");
btn.onmouseenter = changeColor;
// == onmouseover : 이벤트버블링 처리 때문에

// event target
let theBody = document.getElementById("theBody");

// event handler
let cnt = 0;
function changeColor() {
    let color = ["yellow", "skyblue", "pink", "silver"];
    theBody.style.backgroundColor = color[cnt];
    cnt++;
    if (cnt >= color.length) cnt = 0;
}