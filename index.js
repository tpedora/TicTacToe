let playerOne = true;
let box = document.querySelectorAll('.box');
let reset = document.querySelector('.reset');
let gameOver = document.querySelector('.gameover');
let clickCountPOne = 0;
let clickCountPTwo = 0;
let i = 0;

for (i = 0; i < box.length; i++) {
  box[i].addEventListener("click", gamePlay)} 
  
function gamePlay() {
  if (playerOne && clickCountPOne < 5) {
    this.textContent = "X";
    playerOne = false;
    clickCountPOne++;
    gameOver.innerHTML('New Game');
    
  } else if (clickCountPTwo < 4) {
    this.textContent = "O";
    playerOne = true;
    clickCountPTwo++;
    
  } else {
    for (y = 0; y < box.length; y++) {
      box[y].innerHTML = '';
      clickCountPOne = 0;
      clickCountPTwo = 0;
      playerOne = true;
    }  
  }
}

