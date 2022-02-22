let totalTip = document.getElementById("tip-amount");
let totalPerPerson = document.getElementById("total-per-person");

let number = document.getElementById("number-of-people");

let calculate = document.getElementById("calculate");

function getTotals() {
  let tip = document.querySelector("input[name='tip']:checked");
  let amount = parseInt(document.getElementById("bill-amount").value);

  let tipPerCent = parseInt(tip.value) / 100;

  let tipAmount = amount * tipPerCent;

  let tipPerPerson = tipAmount / parseInt(number.value);

  // console.table(amount, tipPerCent);
  console.log(typeof tipPerCent);

  totalTip.textContent = tipAmount.toFixed(2);
  totalPerPerson.textContent = tipPerPerson.toFixed(2);
}

document.addEventListener("click", function (e) {
  //   console.log(e.target);
  if (e.target.id == "calculate") {
    getTotals();
  }
});
