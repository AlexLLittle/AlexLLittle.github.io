const button1 = document.querySelector('.Option1');
const button2 = document.querySelector('.Option2');
const button3 = document.querySelector('.restart_button');




function Choice1() {
    window.location.href = "https://alexllittle.github.io/JS-midterm/8thDoc/8Choice5.html", "_blank";
}
function Choice2() {
    window.location.href = "https://alexllittle.github.io/JS-midterm/8thDoc/8Choice8.html";
}
function Restart() {
    window.location.href = "https://alexllittle.github.io/JS-midterm/index.html", "_blank";
}

button1.addEventListener('click', Choice1);

button2.addEventListener('click', Choice2);

button3.addEventListener('click', Restart);