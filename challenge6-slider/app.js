let slider = document.getElementById("priceRange");
let totalDisplay = document.querySelector(".dollars");

slider.addEventListener("change", function (e) {
  console.log(slider.value);
  calculate(slider.value);
});

function calculate(value) {
  let total = (value / 100).toFixed(2);
  totalDisplay.textContent = total;
}
