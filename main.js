function calculateSquare(number) {
    return number * number;
  }
  
  var inputNumber = 40;
  var square = calculateSquare(inputNumber).toFixed(2);
  
  document.write("The square of " + inputNumber + " is: " + square);
  