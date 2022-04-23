// Query Components
var diceImg_1 = document.querySelector('.img1');
var diceImg_2 = document.querySelector('.img2');
var hdrTitle = document.querySelector('h1');

var diceVal_1 = Math.floor(Math.random() * 6) + 1;
diceImg_1.src = `/images/dice${diceVal_1}.png`;

var diceVal_2 = Math.floor(Math.random() * 6) + 1;
diceImg_2.src = `/images/dice${diceVal_2}.png`;

// Declare Winning
if (diceVal_1 > diceVal_2) {
  hdrTitle.textContent = `🚩 Player 1 wins`;
} else if (diceVal_2 > diceVal_1) {
  hdrTitle.textContent = `Player 2 wins 🚩`;
} else if (diceVal_1 === diceVal_2) {
  hdrTitle.textContent = `🚩 Draw 🚩`;
}
