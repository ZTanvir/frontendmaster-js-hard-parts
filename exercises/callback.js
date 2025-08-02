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

// Extension 3: intersection
function intersection(arrays = [[], []]) {
  let intersectionElements = [];
  for (let i = 0; i < arrays[0].length; i++) {
    let isElementIntersect = false;
    for (let j = 1; j < arrays.length; j++) {
      // check element present on remaining arrays
      if (arrays[j].includes(arrays[0][i])) {
        isElementIntersect = true;
      } else {
        isElementIntersect = false;
      }
    }
    if (isElementIntersect) {
      // when item available in remaining arrays
      intersectionElements.push(arrays[0][i]);
    }
  }
  return intersectionElements;
}

// Extension 4: union

function union(arrays = [[], []]) {
  return arrays.reduce((acc, cur) => {
    const newElements = cur.filter((item) => !acc.includes(item));
    return acc.concat(newElements);
  });
}

// Extension 5: objOfMatches

function objOfMatched(keysArray = [], valuesArray = [], callback) {
  let matched = {};
  for (let i = 0; i < keysArray.length; i++) {
    for (let j = 0; j < valuesArray.length; j++) {
      if (callback(keysArray[i]) === callback(valuesArray[j])) {
        matched[keysArray[i]] = valuesArray[j];
      }
    }
  }
  return matched;
}

export {
  addTwo,
  addS,
  map,
  foreach,
  mapWith,
  reduce,
  intersection,
  union,
  objOfMatched,
};
