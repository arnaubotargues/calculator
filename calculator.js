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

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
