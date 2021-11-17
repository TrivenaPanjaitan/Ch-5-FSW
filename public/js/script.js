let playerChoice = document.querySelectorAll("#player div");
  let comChoice = document.querySelectorAll('#com div');
  let versus =document.getElementById("vs");
  let refresh = document.getElementById("reset-game");
  let result = document.getElementById("alert-result");
  
  
  class Game {
      constructor(isPlay, valuePlayer, valueCom) {
          this.isPlay = isPlay;
          this.valuePlayer = valuePlayer;
          this.valueCom = valueCom;
          this.result = "";   
      }
  
      userChoice() {
         playerChoice.forEach((item, index) => {
              item.addEventListener("click", () => {
                  if (!this.isPlay) {
                      this.valuePlayer = index;
                      this.valueCom = this.randomValue();
  
                      this.playerComStyling();
                      this.resultCheck(this.valuePlayer, this.valueCom);
                      this.resultStyling();
                      this.reset();
                      this.isPlay = true;
                  } else {
                      alert("Reset Dahulu!");
                  }
              });
          }); 
      }
  
      start() {
          this.userChoice();
      }
  
      randomValue() {
          return Math.floor(Math.random() * 3);
      }
  
      resultCheck(valuePlayer, valueCom) {
          let result = "";
          if (valuePlayer === valueCom) {
              result = "Draw" 
          } else {
              if (valuePlayer === 0) {
                  result = (valueCom === 1) ? "Lose" : "Win"; 
              } else if (valuePlayer === 1) {
                  result = (valueCom === 2) ? "Lose" : "Win";
              } else if (valuePlayer === 2) {
                  result = (valueCom === 1) ? "Lose" : " Win";
              }
          }
  
          this.result = result;
      }
  
      playerComStyling() {
          playerChoice[this.valuePlayer].classList.add("bg-gray")
          comChoice[this.valueCom].classList.add("bg-gray")
      }
      
      resultStyling() {
          if (this.result === "Draw") {
              versus.classList.add("d-none");
              result.classList.add("bg-dark-green");
              result.classList.remove("d-none");
              result.innerHTML = "Player 1 <br> Wins";
          } else if  (this.result === "Win") {
              versus.classList.add("d-none");
              result.classList.add("bg-success");
              result.classList.remove("d-none");
              result.innerHTML = "Player 1 Wins";
          } else if  (this.result === "Lose") {
              versus.classList.add("d-none");
              result.classList.add("bg-success");
              result.classList.remove("d-none");
              result.innerHTML = "Player 1 <br>  Lose";
          }
      }
  
      reset() {
          refresh.addEventListener("click", () => {
              versus.classList.remove('d-none');
              result.classList.add("d-none");
              playerChoice[this.valuePlayer].classList.remove("bg-gray");
              comChoice[this.valueCom].classList.remove("bg-gray");
              this.valueCom = this.randomValue();
              this.isPlay = false;
          })
      }
  }
  
  let game = new Game(false, 0, 0);
  game.start();