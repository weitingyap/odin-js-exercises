const convertToCelsius = function(tempFahrenheit) {
  // x Fahrenheit = (x - 32) * (5/9) Celsius
  tempCelsius = (tempFahrenheit - 32) * (5/9);
  if (!Number.isInteger(tempCelsius)) {
    tempCelsius = Number(tempCelsius.toFixed(1));
  }
  return tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
  // x Celsius = (9/5) * x + 32
  tempFahrenheit = 9 / 5 * tempCelsius + 32;
  if (!Number.isInteger(tempFahrenheit)) {
    tempFahrenheit = Number(tempFahrenheit.toFixed(1));
  }
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
