const addButton = document.querySelector(".js-btn");
const buttonText = document.querySelector(".js-text");
const finalItems = document.querySelector(".js-items")

const minusSign = document.querySelector(".js-minus");
const plusSign = document.querySelector(".js-plus");
const itemAmmount = document.querySelector(".js-value");

let ammount = 1;
let hasChanged = false

addButton.addEventListener('click', () => {
  if (hasChanged == false){
    addButton.classList.add("add-btn-grow");

    buttonText.style.display = "none";
    finalItems.style.display = "flex";
    // myTimeout = setTimeout(wait, 400);
    buttonText.style.padding= "10px 20px";

    hasChanged = true;
  }
  
});

plusSign.addEventListener('click', () => {
  ammount+=1;
  itemAmmount.innerHTML = ammount.toString();
});

minusSign.addEventListener('click', () => {
  if (ammount == 1){
    reset();
    setTimeout(()=> {hasChanged = false;}, 100);
  }
  else{
    ammount-=1;
    itemAmmount.innerHTML = ammount.toString();
  }
  
});

function reset(){
  finalItems.style.display = "none";
  buttonText.style.display = "block";
  addButton.classList.remove("add-btn-grow");
}
