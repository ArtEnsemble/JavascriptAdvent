let options = [
  {
    name: "Rock",
    img: "rock.png",
  },
  {
    name: "Paper",
    img: "paper.png",
  },
  {
    name: "Scissors",
    img: "scissors.png",
  },
];

document.addEventListener("click", function (e) {
  if (e.target.className === "play-again") {
    window.open("index.html", "_self");
  }
});

let results = document.querySelector(".wrapper");
let winBox = document.querySelector("body");
// let compBox = document.querySelector(".computer-pick");

let params = new URL(document.location).searchParams;
const player1 = parseInt(params.get("player"));
const comp = parseInt(params.get("computer"));

play(player1, comp);

function play(p, c) {
  console.log(p, c);
  if (p === c) {
    tie();
  }
  if (p == 0 && c == 2) {
    pWins();
  }
  if (p == 1 && c == 0) {
    pWins();
  }

  if (p == 2 && c == 1) {
    pWins();
  }
  if (p == 2 && c == 0) {
    cWins();
  }

  if (p == 0 && c == 1) {
    cWins();
  }

  if (p == 2 && c == 3) {
    cWins();
  }
}

function tie() {
  console.log("tie");

  let frag = document.createDocumentFragment();

  let playerBox = document.createElement("div");
  playerBox.className = "your-pick";
  playerBox.innerHTML = `
  
    
      <img src="./images/${options[player1].img}" alt="${options[player1].name}" />
  `;

  let compBox = document.createElement("div");
  compBox.className = "comp-pick";

  compBox.innerHTML = `     
      <img src="./images/${options[comp].img}" alt="${options[comp].name}" />`;

  let playAgain = document.createElement("button");
  playAgain.className = "play-again";
  playAgain.textContent = "play again?";

  frag.appendChild(playerBox);
  frag.appendChild(compBox);
  frag.appendChild(playAgain);
  results.appendChild(frag);
}

function pWins() {
  console.log("player wins");
  winBox.classList.add("you-win");

  let frag = document.createDocumentFragment();

  let playerBox = document.createElement("div");
  playerBox.className = "your-pick";
  playerBox.innerHTML = `
  
      <h1 class="you-win">you win</h1>
      <img src="./images/${options[player1].img}" alt="${options[player1].name}" />
  `;

  let compBox = document.createElement("div");
  compBox.className = "comp-pick";

  compBox.innerHTML = `
      <img src="./images/${options[comp].img}" alt="${options[comp].name}" />`;

  let playAgain = document.createElement("button");
  playAgain.className = "play-again";
  playAgain.textContent = "play again?";

  frag.appendChild(playerBox);
  frag.appendChild(compBox);
  frag.appendChild(playAgain);
  results.appendChild(frag);
}

function cWins() {
  console.log("computer!");
  winBox.classList.add("computer-wins");

  let frag = document.createDocumentFragment();

  let playerBox = document.createElement("div");
  playerBox.className = "your-pick";
  playerBox.innerHTML = `
  
    
      <img src="./images/${options[player1].img}" alt="${options[player1].name}" />
  `;

  let compBox = document.createElement("div");
  compBox.className = "comp-pick";

  compBox.innerHTML = `      <h1 class="computer-wins">Computer wins</h1>
      <img src="./images/${options[comp].img}" alt="${options[comp].name}" />`;

  let playAgain = document.createElement("button");
  playAgain.className = "play-again";
  playAgain.textContent = "play again?";

  frag.appendChild(playerBox);
  frag.appendChild(compBox);
  frag.appendChild(playAgain);
  results.appendChild(frag);
}
