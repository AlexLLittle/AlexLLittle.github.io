const button = document.querySelector('.our-vol-button');
let totalClick = 0
    console.log(totalClick)  
button.addEventListener('click', random);

function NewTab() {
    window.open(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}
// Jquerry to move button found at: https://codepen.io/ardoba/pen/ZNodRK.
function move() {
var changeTop = (Math.random() * ($(window).height() - $("button").height()));
  var changeLeft = (Math.random() * ($(window).width() - $("button").width()));
  $("button").css("margin-top", changeTop + "px");
  $("button").css("margin-left", changeLeft + "px")
  }
function random() {
    Volnumber = Math.floor(Math.random() * 79);
    document.getElementById('VolText').innerHTML = `Current Volume: ${Volnumber}`
    totalClick += 1
    if (totalClick === 3){
        NewTab()
    }
    if (totalClick != 1){ // so that it doesn't triggr the first time
        move()
    }
}





