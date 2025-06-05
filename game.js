
let gameResult=document.getElementById("gameResult");
let userInput=document.getElementById("userInput");
let randomNumber=Math.ceil(Math.random()*100);
console.log(randomNumber);
function checkGuess(){
    let guessNumber=parseInt(userInput.value);
if (guessNumber>randomNumber) {
    gameResult.textContent="Too high! Try agian.";
    gameResult.style.backgroundColor="#1e217c"

}
else if (guessNumber<randomNumber) {
    gameResult.textContent="Too Low! Try agian.";
    gameResult.style.backgroundColor="#1e217c"

}
else if (guessNumber===randomNumber) {
    gameResult.textContent="congratulations!You got it right.";
    gameResult.style.backgroundColor="green"

}
else {
    gameResult.textContent="Please Provide a valid input.";
    gameResult.style.backgroundColor="#1e217c"
}
  
} 

