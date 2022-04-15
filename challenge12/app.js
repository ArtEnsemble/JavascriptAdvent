let player;
let computer;
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
  if (e.target.closest(".pick-one button")) {
    pick = e.target.closest("button").dataset.id;
    play(pick);
  }
});

function play(playerChoice) {
  let computerChoice = Math.floor(Math.random() * 2);

  window.open(
    `winner.html?computer=${computerChoice}&player=${playerChoice}`,
    "_self"
  );
  console.log(computerChoice);
}
