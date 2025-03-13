const readlineSync = require("readline-sync");

function getOperation() {
  const operation = readlineSync.question(
    "What operation would you like to perform? (/, *, +, -): "
  );
  if (["/", "*", "+", "-"].includes(operation)) {
    return operation;
  } else {
    console.log("That is not a valid operation");
    return getOperation();
  }
}

function getNumber(message) {
  const number = readlineSync.question(message);
  if (isNaN(number)) {
    console.log("This is not a number");
    return getNumber(message);
  }
  return parseFloat(number);
}

function performOperation(operation, firstNumber, secondNumber) {
  let result;
  switch (operation) {
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
  }
  console.log(`The result is: ${result}`);
}

function main() {
  const operation = getOperation();
  const firstNumber = getNumber("Please enter the first number: ");
  const secondNumber = getNumber("Please enter the second number: ");
  performOperation(operation, firstNumber, secondNumber);
}

main();
