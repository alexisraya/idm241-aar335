const addButton = document.querySelector(".js-btn");
const buttonText = document.querySelector(".js-text");
const finalItems = document.querySelector(".js-items");

const minusSign = document.querySelector(".js-minus");
const plusSign = document.querySelector(".js-plus");
const itemAmmount = document.querySelector(".js-value");

const clickField = document.querySelector(".js-box");


let ammount = 1;
let hasChanged = false;
let isDefault = true;

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

let handleClickOutsideElement = function  (elm, callback) {
  
  var fnOutsideElement = function (event) {
    if (event.target !== elm && !elm.contains(event.target)) {
      callback();
      // detaches automatically after usage
      document.removeEventListener('click', fnOutsideElement, true);
    }
  }

  document.addEventListener('click', fnOutsideElement, true);
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

document.addEventListener('click', function(event) {
  let isClickInside = clickField.contains(event.target);
  if (isClickInside) {
    if(isDefault == false){
      addButton.classList.remove("outside");
      grow();
      minusSign.style.display = "flex";
      plusSign.style.display = "flex";
      itemAmmount.classList.add("value-label");
    }
  }
  else{
    if(buttonText.style.display == "none"){
      isDefault = false;
      minusSign.style.display = "none";
      plusSign.style.display = "none";
      addButton.classList.add("outside");
      itemAmmount.classList.remove("value-label");
    }
  }
});