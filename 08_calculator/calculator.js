const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, num)=>sum+num, 0);
};

const multiply = function(arr) {
  return arr.reduce((multiplied,num)=>multiplied*num, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if ( a === 0 || a === 1 ) return 1;

  let factorial = 1;
  for (let factor = 1; factor <= a; factor++){
    factorial *= factor;
  }

  return factorial;
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
