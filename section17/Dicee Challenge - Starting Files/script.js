console.log("HI");
var randomnumber1 = 0;
randomnumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomnumber1);
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomnumber2);
document.addEventListener('DOMContentLoaded', async function () {
    // Get the element with the class 'img1'
    var img1Element = document.querySelector('.img1');
    var winnerElement = document.querySelector('.container h1');
  
    // Check if the element with class 'img1' exists
    if (img1Element) {
      // Set the src attribute of the element with class 'img1'
      img1Element.setAttribute('src', `./images/dice${randomnumber1}.png`);
    } else {
      console.error('No element found with the class "img1"');
    }

    var img2Element = document.querySelector('.img2');
  
    // Check if the element with class 'img1' exists
    if (img2Element) {
      // Set the src attribute of the element with class 'img1'
      img2Element.setAttribute('src', `./images/dice${randomnumber2}.png`);
    } else {
      console.error('No element found with the class "img1"');
    }

    if (randomnumber1 > randomnumber2) {
        winnerElement.textContent = "Player 1 is the winner";
    } else if (randomnumber2 > randomnumber1) {
        winnerElement.textContent = "Player 2 is the winner";
    } else if (randomnumber1 === randomnumber2) {
        winnerElement.textContent = "It's a draw";
    } else {
        console.error('No element found with the class "container" and the class "refresh-me"');
    }
    
});
  