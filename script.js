"use strict";

/*  #1  */
let foodButtons = document.querySelectorAll(".food");
let totalDiv = document.querySelector(".total");

let total = 0;

foodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let price = parseFloat(button.getAttribute("data-price"));
    total += price;
    totalDiv.innerText = `Total: $${total}`;
  });
});

/* #2 */
let makeMoneyForm = document.querySelector(".make-money");
let coinContainerDiv = document.querySelector(".coin-container");

//Helper function to make coins
const makeACoin = (coinType) => {
  let newCoin = document.createElement("div");
  newCoin.setAttribute("class", "coin");
  newCoin.addEventListener("click", () => {
    newCoin.remove();
  });

  let coinLabel = document.createElement("div");
  coinLabel.setAttribute("class", "coin-label");
  coinLabel.innerText = coinType;

  newCoin.append(coinLabel);
  coinContainerDiv.append(newCoin);
};

//Event listener for the form
makeMoneyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(makeMoneyForm);
  let coinAmount = parseInt(data.get("amount"));
  let coinType = data.get("coin-select");
  for (let i = 1; i <= coinAmount; i++) {
    makeACoin(coinType);
  }
});

/* #3 */
let lightBulb = document.querySelector(".light-bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("turn-on");
});

onButton.addEventListener("click", () => {
  lightBulb.classList.add("turn-on");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("turn-on");
});

endButton.addEventListener("click", () => {
  onButton.disabled = true;
  offButton.disabled = true;
  toggleButton.disabled = true;
  endButton.disabled = true;
});
