var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector('img.img1').src = 'images/dice' + randomNumber1 + '.png';
document.querySelector('img.img2').src = 'images/dice' + randomNumber2 + '.png';

if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerText = 'Player 2 Wins! 🚩';
} else if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerText = '🚩 Player 1 Wins!';
} else {
  document.querySelector('h1').innerText = '🚩Draws! 🚩';
}
