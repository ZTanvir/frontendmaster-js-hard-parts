// Challenge 1: Create a Function
function createFunction() {
  return function () {
    console.log("hello");
  };
}

// Challenge 2: Function Printer
function createFunctionPrinter(input) {
  return function () {
    console.log(input);
  };
}

//Challenge 3: Independent Counters
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
    return counter; // this code has added to test
  }
  return incrementCounter;
}

// Challenge 4: Add by X

function addByX(x) {
  function operation(input) {
    return input + x;
  }
  return operation;
}

export { createFunction, createFunctionPrinter, outer, addByX };
