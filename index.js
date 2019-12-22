// Your code here
let dodger = document.getElementById("dodger");

function moveDodgerRight() {
  let rightNumbers = dodger.style.right.replace("px", "");
  let left = parseInt(rightNumbers, 10);
 
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}