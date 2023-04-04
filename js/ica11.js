// i have commented so that I know what is going on!

const button = document.querySelector(".new-quote"); // using the class of the button to recognize it as a variable
button.addEventListener('click', getQuote); // if button is cliked use fucntion

// const answerButton = document.querySelector("#js-tweet");
// answerButton.addEventListener('click', showAnswer);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"; // link for where we want

async function getQuote() { // need to be async so that we can use await
    //console.log("i hate you lmao"); it works
    try { // we want to try to run it. if it doesn't work go to catch
        const response = await fetch(endpoint) // we will wait to fetch
        if (!response.ok) {// if response is not ok
            throw Error(response.statusText)
        }
        const json = await response.json();
        // console.log(json.question); // logs the question
        displayQuote(json.question) // calls the function and uses the question as the argument.
        showAnswer(json.answer) // calls the function and uses the question as the argument.

        
    }
    catch (err) { // we are catching error
        console.log(err) // put the error in the log
        alert('failed to fetch some epic gamer trivia about the december holiday on december 25') // send an alart for the error
    }
}

function displayQuote(quote) { // new function to display quote. takes a quote as a parameter
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote; // setting the value of the parameter equal to the variable quoteText

    const button = document.querySelector(".new-quote"); // using the class of the button to recognize it as a variable
    button.addEventListener('click', getQuote); // if button is cliked use fucntion

}
function showAnswer(quote) { // new function to display quote. takes a quote as a parameter
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = quote; // setting the value of the parameter equal to the variable quoteText
}

getQuote();