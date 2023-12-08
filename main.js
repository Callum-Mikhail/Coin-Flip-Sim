// COIN FLIP SIMULATOR

//HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
//Variable count
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //generate
  let randNum = Math.random();
  console.log(randNum);

  // Simulate
  if (randNum < 0.5) {
    document.getElementById("output").innerHTML = "<img src='img/heads.png'>";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    document.getElementById("output").innerHTML = "<img src='img/tails.png'>";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}
