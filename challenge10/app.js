let inputs = document.querySelectorAll(".fields input");

// document.addEventListener("keyup", function (e) {
//   console.log(e);
//   if (e.target.tagName === "INPUT") {
//     e.target.nextElementSibling.focus();
//   }
// });

// document.addEventListener("change", function (e) {
//   if (e.target.tagName === "INPUT") {
//     console.log("input changed");
//     e.target.nextElementSibling.focus();
//   }
// });

document.addEventListener("input", function (e) {
  // console.log(e);
  if (e.target.tagName === "INPUT" && e.target.name !== "verification_4") {
    e.target.nextElementSibling.focus();
  }
});

document.addEventListener("paste", function (e) {
  // console.log(e.target);
  if (e.target.tagName === "INPUT") {
    let inputTarget = e.target.name.split("_")[1] - 1;
    // console.log(inputTarget);
    let clipboard = e.clipboardData.getData("text");
    let clipArr = clipboard.split("");

    for (i = 0; i < 4 - inputTarget; i++) {
      let ii = inputTarget + i;
      inputs[ii].value = clipArr[i];
    }

    // inputs[i - 1].value = clipArr[0];

    // e.target.value = clipArr[0];
    // e.target.nextElementSibling.focus();
  }
});
