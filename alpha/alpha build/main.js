const addButton = document.querySelector(".js-btn");
const buttonText = document.querySelector(".js-text");
const finalItems = document.querySelector(".js-items")

const minusSign = document.querySelector(".js-minus");
const plusSign = document.querySelector(".js-plus");
const itemAmmount = document.querySelector(".js-value");

let ammount = 1;

addButton.addEventListener('click', () => {
  addButton.classList.add("add-btn-grow");

  buttonText.style.display = "none";
  finalItems.style.display = "flex";
  // myTimeout = setTimeout(wait, 400);
  buttonText.style.padding= "10px 20px";
});

plusSign.addEventListener('click', () => {
  ammount+=1;
  itemAmmount.innerHTML = ammount.toString();
});

minusSign.addEventListener('click', () => {
    ammount-=1;
    itemAmmount.innerHTML = ammount.toString();
});