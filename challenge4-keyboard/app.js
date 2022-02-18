const keys = "abcdefghijklmnopqrstuvwxyz1234567890";

let keyArr = keys.split("");

let char;

let score = {
  right: 0,
  wrong: 0,
};

//generate a random key
function randomKey() {
  let num = Math.floor(Math.random() * 36);
  char = keyArr[num];
  console.log(char);
  let key = document.querySelector(`[data-key="${char.toUpperCase()}"]`);

  key.classList.add("jiggle");
}

// EVENTS
document.addEventListener("click", function (e) {
  if (e.target.closest("button.jiggle")) {
    findKey(e.target);
  }
});

function findKey(el) {
  console.log("you found the jiggling key");
  el.classList.remove("jiggle");
  randomKey();
}

document.addEventListener("keydown", function (e) {
  if (e.key === char) {
    let keyButton = document.querySelector(
      `[data-key="${char.toUpperCase()}"]`
    );
    keyButton.classList.remove("jiggle");
    score.right++;
    document.getElementById("right").textContent = score.right;

    randomKey();
  } else {
    let wrongKey = document.querySelector(`[data-key="${e.key}"]`);

    score.wrong++;
    document.getElementById("wrong").textContent = score.wrong;
  }
});

randomKey();
