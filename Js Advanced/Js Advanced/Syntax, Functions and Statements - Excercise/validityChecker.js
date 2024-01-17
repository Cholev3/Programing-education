function validityChecker(x1, y1, x2, y2) {
  let result1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
  let result2 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
  let result3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

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
