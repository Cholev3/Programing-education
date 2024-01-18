function biggestElement(matrix) {
  let biggestNum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j <= matrix.length; j++) {
      let currentNum = matrix[i][j];
      if (currentNum > biggestNum) {
        biggestNum = matrix[i][j];
      }
    }
  }

  return biggestNum;
}
console.log(
  biggestElement([
    [20, 50, 10],
    [8, 33, 145],
  ])
);
