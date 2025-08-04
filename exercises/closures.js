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
// Challenge 5: Once

function once(callbackFunc) {
  let count = 0;
  let result = 0;
  function calculation(input) {
    if (count === 0) {
      result = callbackFunc(input);
      count++;
      return result;
    }
    return result;
  }
  return calculation;
}

// Challenge 6:After
function after(count, func) {
  let totalCount = count;
  let startCount = 0;
  function callAfter() {
    startCount += 1;

    if (startCount >= totalCount) {
      func();
    }
  }
  return callAfter;
}

// Challenge 7: Delay
function delay(func, wait, ...args) {
  setTimeout(() => func(...args), wait);
}

export { createFunction, createFunctionPrinter, outer, addByX, once, after };
