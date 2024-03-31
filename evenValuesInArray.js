function evenValuesInArray(arr) {
  let evenValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) evenValues.push(arr[i]);
  }
  return evenValues;
}

module.exports = evenValuesInArray;
