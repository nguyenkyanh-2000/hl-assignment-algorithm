const readline = require("readline");
const minInArray = require("./minInArray");
const maxInArray = require("./maxInArray");
const sumOfArray = require("./sumOfArray");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Simple input: ", (inputLine) => {
  const integers = inputLine.trim().split(" ").map(Number);

  if (integers.length !== 5 || integers.some(isNaN)) {
    console.log("Please enter exactly 5 valid integers separated by space.");
  } else {
    console.log(
      `Simple output: ${sumOfArray(integers) - maxInArray(integers)} ${
        sumOfArray(integers) - minInArray(integers)
      }`
    );
  }

  rl.close();
});
