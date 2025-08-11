// Challenge 1: Understanding Execution Order
function testMe() {
  setTimeout(() => {
    console.log("Howdy");
  }, 0);
  console.log("Partnah");
}

// Challenge 2: Delayed Greeting
function delayedGreet() {
  setTimeout(() => {
    console.log("welcome");
  }, 3000);
}

// Challenge 3: Say Hello, Then Goodbye
function helloGoodBye() {
  setTimeout(() => {
    console.log("good bye");
  }, 2000);
  console.log("hello");
}

// Challenge 4: Repeating Logs
function brokenRecord() {
  setInterval(() => {
    console.log("hi again");
  }, 1000);
}

// Challenge 5: Limited Repeats
function limitedRepeat() {
  const interval = setInterval(() => console.log("hi for now"), 1000);
  setTimeout(() => clearInterval(interval), 5000);
}

// Challenge 6: Flexible Timer
function theEnd() {
  console.log("This is the end!");
}
function everyXsecsForYsecs(func, interval, duration) {
  const intervalId = setInterval(func, interval);
  setTimeout(() => clearInterval(intervalId), duration);
}
