// Challenge 1: Add Two
function addTwo(num) {
  return num + 2;
}

// Challenge 2: Add S
function addS(word) {
  return word + "s";
}

// Challenge 3: Custom Map

function map(array, callback) {
  let numbers = [];
  for (let index = 0; index < array.length; index++) {
    numbers.push(callback(array[index]));
  }
  return numbers;
}

// Challenge 4: Custom ForEach

function foreach(array = [], callback) {
  // let output = [];
  //  array.forEach((item) => output.push(callback(item)));
  array.forEach((item) => callback(item));
  // return output;
}

// Extension 1: mapWith
function mapWith(array, callback) {
  let output = [];
  foreach(array, (el) => output.push(callback(el)));
  return output;
}
// Extension 2: reduce
function reduce(array = [], callback, initialValue) {
  let result = initialValue;
  array.forEach((item) => {
    result = callback(item, result);
  });
  return result;
}

export { addTwo, addS, map, foreach, mapWith, reduce };
