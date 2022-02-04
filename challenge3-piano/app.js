let piano = document.querySelector(".piano");

piano.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.closest("a")) {
    let random = Math.floor(Math.random() * 23);
    console.log(random);

    let soundURL = `audio/key-${random}.mp3`;

    let sound = new Audio(soundURL);

    sound.play();
  }
});
