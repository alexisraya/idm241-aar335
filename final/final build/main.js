const addButton = document.querySelector(".js-btn");
const buttonText = document.querySelector(".js-text");
const finalItems = document.querySelector(".js-items")

const minusSign = document.querySelector(".js-minus");
const plusSign = document.querySelector(".js-plus");
const itemAmmount = document.querySelector(".js-value");

const clickField = document.querySelector(".js-box");

let ammount = 1;
let hasChanged = false;
let clickedField = false;
let clickedButton = false;

function grow(){
   if (hasChanged == false){
    addButton.classList.add("add-btn-grow");

    buttonText.style.display = "none";
    finalItems.style.display = "flex";
    // myTimeout = setTimeout(wait, 400);
    buttonText.style.padding= "10px 20px";

    hasChanged = true;
  } 
}

function reset(){
  finalItems.style.display = "none";
  buttonText.style.display = "block";
  addButton.classList.remove("add-btn-grow");
}

// clickField.addEventListener('click', () => {
//     clickedField = true;
//     clickedButton = false;
//     if (target!=addButton){
//         alert("hit");
//     }
// });

// clickField.onclick = function(e) {
//     if(e.target != addButton) {
//         alert("not button");
//     }
//     else{
//         alert("button");
//     }
// }

addButton.addEventListener('click', () => {
    clickedButton = true;
    clickedField = false;
    grow();
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