console.log("hello, world >:(");
      let btn = document.querySelector("#button");
      // console.log(btn);

      function changeBtn() {
        // console.log("ouch")
        btn.textContent = "TEST";
        btn.style.backgroundColor = "darkmagenta";
        // btn.stlye.border = "2px solid blue";
        btn.style.color = "white";
      }

      btn.addEventListener("click", changeBtn);

      function checkGuess() {
        // alert(userGuess);
        let value = userGuess.value * 2;
        alert(value);
      }

      let guessBtn = document.querySelector(".guessSubmit");
      let userGuess = document.querySelector(".guessField");

      guessBtn.addEventListener("click", checkGuess);

      let WEEZ = document.querySelector(".weezer")
      function changeIMG() {
        // console.log("test")
        WEEZ.style.opacity = "0"
      }
      WEEZ.addEventListener("click", changeIMG)

      let btn2 = document.querySelector("#button2");
      let everything = document.querySelector("body")
      // console.log(btn);

      function changeBtn2() {
        // console.log("ouch")
        // btn2.textContent = "TEST";
        everything.style.backgroundColor = "red"

      }

      btn2.addEventListener("click", changeBtn2);