function magicMatrices(matrix) {
    let sums = [];
    let currentRowSum = 0;
    let currentColSum = 0;
    let isMagic = true;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            currentRowSum += matrix[i][j];
            currentColSum += matrix[j][i];
        }

        sums.push(currentRowSum);
        sums.push(currentColSum);
        currentRowSum = 0;
        currentColSum = 0;
    }

    for (let num of sums) {
        if (num != sums[0]) {
            isMagic = false;
        }
    }
    console.log(isMagic);
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);