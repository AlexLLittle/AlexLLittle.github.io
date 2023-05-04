const button1 = document.querySelector('.Option1');
const button2 = document.querySelector('.Option2');
const button3 = document.querySelector('.restart_button');


function StartStory11() {
    window.location.href = "https://alexllittle.github.io/JS-midterm/11thDoc/11thDoctor.html", "_blank";
}
function StartStory8() {
    window.location.href = "https://alexllittle.github.io/JS-midterm/8thDoc/8thDoctor.html", "_blank";
}
function Restart() {
    window.location.href = "https://alexllittle.github.io/JS-midterm/index.html", "_blank";
}

button1.addEventListener('click', StartStory8);

button2.addEventListener('click', StartStory11);

button3.addEventListener('click', Restart);

