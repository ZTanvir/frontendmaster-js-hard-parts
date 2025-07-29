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

export { addTwo, addS, map };
