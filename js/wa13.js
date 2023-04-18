const button = document.querySelector('.our-vol-button');
let totalClick = 0
    console.log(totalClick)  
button.addEventListener('click', random);

function NewTab() {
    window.open(
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

function random() {
    // outputInt = randomNumber(12, 79);
    Volnumber = Math.floor(Math.random() * 79);
    document.getElementById('VolText').innerHTML = `Current Volume: ${Volnumber}`
    totalClick += 1
    if (totalClick === 5){
        NewTab()
    }
}
console.log(totalClick)  




