const add = function(num1,num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
	
};

const sum = function(num) {
  let total = 0;
  for(let i=0;i<num.length;i++){
    total += num[i]; 
  }
  return total;
	
};

const multiply = function(num) {
  
  function  getmult(num1,num2){
    return num1*num2;
  }
  let total = num.reduce(getmult);
  return total;
  
    
  
};

const power = function(num,exp) {
  let total = num;
  for(let i = 1; i<=exp-1;i++){
    total = total * num; 
  }
  return total;
	
};

const factorial = function(num) {
let total = num;

if(num==0|| num==1){
  return 1;
}
for( let i=num-1; i>=1;i--){
  total*= i;
}
return total;
};

let operator = "";
let num1=""; 
let num2 = "";
const container = document.querySelector("#calculator-buttons")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
let pantalla = document.querySelector(".pantalla")
let isSecondNumber = false;


numbers.forEach((button) => {
  button.addEventListener("click",() => {
    if(!isSecondNumber){
      num1 += button.innerText
    pantalla.innerText= num1;
    console.log(num1);
    }else{

    num2+=button.innerText;
    console.log(num2);
    }
  })
})

operators.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      num1 = "";
      num2 = "";
      operator = "";
      isSecondNumber = false;
      pantalla.innerText = "0";
    } else if (value === "=") {
      let result = 0;
      if (operator === "+") result = Number(num1) + Number(num2);
      if (operator === "-") result = Number(num1) - Number(num2);
      if (operator === "x") result = Number(num1) * Number(num2);
      if (operator === "/") result = Number(num1) / Number(num2);

      pantalla.innerText = result;
      num1 = result.toString();
      num2 = "";
      operator = "";
      isSecondNumber = false;
    } else {
      operator = value;
      isSecondNumber = true;
    }
  });
});



function operate(num1,num2){
  if(operator === "+"){
    return add(num1,num2)
  }
  if (operator === "-"){
    return subtract(num1,num2);
  }
  if(operator === "X"){
    return multiply(num1,num2)
  }
 

}
