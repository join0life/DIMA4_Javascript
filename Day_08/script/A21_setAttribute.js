let imageAry = ['../images/face1.png', '../images/face2.png',
    '../images/face3.png', '../images/face4.png'];

let eventSource = document.getElementById("face");

let i = 0;
setInterval(function () {
    let myImg = imageAry[i];
    eventSource.setAttribute("src", myImg);
    i++;
    if (i >= imageAry.length) i = 0;
}, 1500);