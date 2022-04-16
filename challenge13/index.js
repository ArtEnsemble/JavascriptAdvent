document.addEventListener("click", function (e) {
  //   console.log(e.target);
  if (e.target.closest("button.close") || e.target.closest("#something")) {
    toggleModal();
  }
});

let modal = document.querySelector(".overlay");
let beacon = document.getElementById("something");

function toggleModal() {
  modal.classList.toggle("overlay__closed");
}
