// window 객체의 open() 함수의 사용
window.addEventListener('load', function () {
    window.open('notice.html', 'win', 'height=600px, left=100px, width=400px, menubar=no');
});

let newWin = document.getElementById("newWin");
newWin.addEventListener('click', function () {
    window.open('notice.html', 'win', 'height=600px, left=100px, width=400px, menubar=no');
});