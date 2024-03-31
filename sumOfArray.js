function sumOfArray(arr) {
  let sum = 0;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

module.exports = sumOfArray;
