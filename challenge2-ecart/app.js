const myOrder = [];

const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 223,
    image: "plate__french-fries.png",
    alt: "French Fries",
    count: 0,
    id: "01",
  },
  {
    name: "Salmon and Vegetables",
    price: 512,
    image: "plate__salmon-vegetables.png",
    alt: "Salmon and Vegetables",
    count: 0,
    id: "02",
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 782,
    image: "plate__spaghetti-meat-sauce.png",
    alt: "Spaghetti with Meat Sauce",
    count: 0,
    id: "03",
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 599,
    image: "plate__bacon-eggs.png",
    alt: "Bacon, Eggs, and Toast",
    count: 0,
    id: "04",
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 698,
    image: "plate__chicken-salad.png",
    alt: "Chicken Salad with Parmesan",
    count: 0,
    id: "05",
  },
  {
    name: "Fish Sticks and Fries",
    price: 634,
    image: "plate__fish-sticks-fries.png",
    alt: "Fish Sticks and Fries",
    count: 0,
    id: "06",
  },
];

let subTotal = 0;
let tax = 0;
let totalPrice = 0;

const subTotalPrice = document.querySelector(".subtotal");
const taxes = document.querySelector(".tax");
const total = document.querySelector(".total > .total");

const menuList = document.querySelector("ul.menu");
const orderList = document.querySelector("ul.cart-summary");

const emptyMessage = document.querySelector(".empty");

(function menu() {
  let frag = new DocumentFragment();

  for (const [index, value] of menuItems.entries()) {
    const content = document.createElement("li");
    content.innerHTML = `
  <div class="plate" >
    <img src='images/${value.image}' alt="${value.alt}" class="plate" />
  </div>
  <div class="content">
    <p class="menu-item">${value.name}</p>
    <p class="price">$${value.price / 100}</p>
    <button class="add" data-menuid="${index}">Add to Cart</button>
  </div>
`;
    frag.appendChild(content);
  }
  menuList.appendChild(frag);
})();

function order() {
  // let orderArr = menuItems.filter(function (item) {
  //   return item.count > 0;
  // });

  updateCart(menuItems);
  updatePrice(menuItems);
}

function updateCart(order) {
  if (order.length > 0) {
    emptyMessage.style.display = "none";
  }
  if (order.length == 0) {
    emptyMessage.style.display = "block";
  }
  let frag = new DocumentFragment();
  for (const [index, value] of order.entries()) {
    if (value.count > 0) {
      let content = document.createElement("li");

      content.innerHTML = `
<div class="plate">
              <img
                src="images/${value.image}"
                alt="${value.name}"
                class="plate"
              />
              <div class="quantity">${value.count}</div>
            </div>
            <div class="content">
              <p class="menu-item">${value.name}</p>
              <p class="price">$${value.price / 100}</p>
            </div>
            <div class="quantity__wrapper">
              <button class="decrease" data-menuid='${index}'>
                <img src="images/chevron.svg" />
              </button>
              <div class="quantity">${value.count}</div>
              <button class="increase" data-menuid='${index}'>
                <img src="images/chevron.svg" />
              </button>
            </div>
            <div class="subtotal">$${(value.count * value.price) / 100}</div>`;
      frag.appendChild(content);
    }
  }
  orderList.innerHTML = "";
  orderList.appendChild(frag);
}

function updatePrice(order) {
  subTotal = order.reduce(getSubtotal, 0);
  tax = subTotal * 0.1;
  totalPrice = subTotal + tax;

  subTotalPrice.textContent = `$${subTotal / 100}`;
  taxes.textContent = `$${(tax / 100).toFixed(2)}`;
  total.textContent = `$${(totalPrice / 100).toFixed(2)}`;
}

// menu();

// EVENT LISTENERS
document.addEventListener("click", function (event) {
  console.log(event);
  if (event.target.className === "add") {
    menuItems[event.target.dataset.menuid].count++;
    order();
  }
  if (
    event.target.closest("button") &&
    event.target.closest("button").className == "increase"
  ) {
    console.log("increase");
    menuItems[event.target.closest("button").dataset.menuid].count++;
    order();
  }
  if (
    event.target.closest("button") &&
    event.target.closest("button").className === "decrease"
  ) {
    console.log("decrease");
    menuItems[event.target.closest("button").dataset.menuid].count--;
    order();
  } else {
    return;
  }
});

function getSubtotal(total, curr) {
  sub = total + curr.price * curr.count;
  // console.log(total, curr.price, sub);
  return sub;
}
