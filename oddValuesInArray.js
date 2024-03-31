function oddValuesInArray(arr) {
  let oddValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) % 2 === 1) oddValues.push(arr[i]);
  }
  return oddValues;
}

module.exports = oddValuesInArray;
