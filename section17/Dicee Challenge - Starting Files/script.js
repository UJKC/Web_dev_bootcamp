console.log("HI");
var randomnumber1 = 0;
randomnumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomnumber1);
var randomnumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomnumber2);
document.addEventListener('DOMContentLoaded', function () {
    // Get the element with the class 'img1'
    var img1Element = document.querySelector('.img1');
  
    // Check if the element with class 'img1' exists
    if (img1Element) {
      // Set the src attribute of the element with class 'img1'
      img1Element.setAttribute('src', `./images/dice${randomnumber1}.png`);
    } else {
      console.error('No element found with the class "img1"');
    }
  });
  