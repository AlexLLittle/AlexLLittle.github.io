const button = document.querySelector(".new-character"); 
button.addEventListener('click', getQuote); 

const Otherbutton = document.querySelector("#js-tweet"); 
Otherbutton.addEventListener('click', showAnswer);



Startnumber = Math.floor(Math.random() * 108);
const endpoint = "https://rickandmortyapi.com/api/character/"+Startnumber; 

async function getQuote() { 
    Startnumber = Math.floor(Math.random() * 108);
    const endpoint = "https://rickandmortyapi.com/api/character/"+Startnumber; 
    document.getElementById("js-answer-text").style.backgroundColor = "black";
    try { // we want to try to run it. if it doesn't work go to catch
        const response = await fetch(endpoint) // we will wait to fetch
        if (!response.ok) {// if response is not ok
            throw Error(response.statusText)
        }
        const json = await response.json();
        displayCharacter(json.name) // calls the function and uses the question as the argument.
        genAnswer(json.status) // calls the function and uses the question as the argument.

        
    }
    catch (err) { // we are catching error
        console.log(err) // put the error in the log
        alert('failed to fetch some epic gamer trivia about the december holiday on december 25') // send an alart for the error
    }
}

function displayCharacter(Character) { 
    const CharacterText = document.querySelector("#js-character-text");
    CharacterText.textContent = Character; 

    const button = document.querySelector(".new-character"); 
    button.addEventListener('click', getQuote);

}
function genAnswer(quote) {
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = quote;
}
function showAnswer() {
    // let show = new Boolean(false);
    console.log("it works")
    // if (show = true){
    //     document.getElementById("js-answer-text").style.backgroundColor = "white";

    // }
    document.getElementById("js-answer-text").style.backgroundColor = "white";
}
getQuote();