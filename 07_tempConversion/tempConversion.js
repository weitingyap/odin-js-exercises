const convertToCelsius = function(tempFahrenheit) {
  // x Fahrenheit = (x - 32) * (5/9) Celcius
  tempCelcius = (tempFahrenheit - 32) * (5/9);
  if (!Number.isInteger(tempCelcius)) {
    tempCelcius = Number(tempCelcius.toFixed(1));
  }
  return tempCelcius;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
