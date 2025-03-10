const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askOperation() {
  rl.question(
    "What operation would you like to perform? (/, *, +, -): ",
    (operation) => {
      if (["/", "*", "+", "-"].includes(operation)) {
        askFirstNumber(operation);
      } else {
        console.log("That is not a valid operation");
        askOperation();
      }
    }
  );
}

function askFirstNumber(operation) {
  rl.question("Please enter the first number: ", (firstNumber) => {
    if (isNaN(firstNumber)) {
      console.log("This is not a number");
      askFirstNumber(operation);
    } else {
      askSecondNumber(operation, parseFloat(firstNumber));
    }
  });
}

function askSecondNumber(operation, firstNumber) {
  rl.question("Please enter the second number: ", (secondNumber) => {
    if (isNaN(secondNumber)) {
      console.log("This is not a number");
      askSecondNumber(operation, firstNumber);
    } else {
      performOperation(operation, firstNumber, parseFloat(secondNumber));
    }
  });
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
  rl.close();
}

askOperation();
