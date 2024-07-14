function writeCopy() {
  let d = new Date();
  let el = document.querySelector("#copy");
  el.innerHTML = 'Copyright © ' + d.getFullYear();
}

document.addEventListener('DOMContentLoaded', writeCopy);


// fields
// target all input fields to constants
const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#numPeople");
const tip = document.querySelector("#tip")//todo

// elements
// target all display fields to constants
const amt = document.querySelector("#amt");
const ttp = document.querySelector("#ttp");
const app =  document.querySelector("#app")//todo

// listeners when fields change
const inputColl = document.querySelectorAll("input"); //todo
for (let item of inputColl) { // loop each item
  item.addEventListener("change", doCalculate);
}

// 
function doCalculate() {
  let totalTips = (1.0 * bill.value) * (1.0 * tip.value) * 0.01;
  let totalAmount = (1.0 * bill.value) + totalTips; //todo
  let amountPerPerson = totalAmount / (1.0 * numPeople.value); //todo
  
  amt.innerHTML = totalAmount.toFixed(2);
  ttp.innerHTML = totalTips.toFixed(2); //todo
  app.innerHTML = amountPerPerson.toFixed(2); //todo
}