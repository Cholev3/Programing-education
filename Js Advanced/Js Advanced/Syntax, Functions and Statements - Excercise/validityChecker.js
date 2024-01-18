function validityChecker(x1, y1, x2, y2) {
  let result1 = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
  let result2 = Math.sqrt((x1 - 0) ** 2 + (y1 - 0) ** 2);
  let result3 = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

  let finalResult1 = Number.isInteger(result1)
    ? console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    : console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);

  let finalResult2 = Number.isInteger(result2)
    ? console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    : console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);

  let finalResult3 = Number.isInteger(result3)
    ? console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    : console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
validityChecker(2, 1, 1, 1);

// function validityChecker(x1, y1, x2, y2) {
//   isValid(x1, y1, 0, 0);
//   isValid(x2, y2, 0, 0);
//   isValid(x1, y1, x2, y2);

//   function calculateDistance(x1, y1, x2, y2) {
//       let xDifference = x1 - x2;
//       let yDifference = y1 - y2;

//       return Math.sqrt(Math.pow(xDifference, 2) + Math.pow(yDifference, 2));
//   }

//   function isValid(x1, y1, x2, y2) {
//       let isValid = Number.isInteger(calculateDistance(x1, y1, x2, y2));

//       console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid ? 'valid' : 'invalid'}`);
//   }
// }

