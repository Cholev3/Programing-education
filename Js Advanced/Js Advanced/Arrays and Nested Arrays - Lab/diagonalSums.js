function diagonalSums(matrix) {
    let mainDiag = 0;
    let secondaryDiag = 0;

    for (let i = 0; i < matrix.length; i++) {
        let secIndex = matrix.length - 1 - i;
        mainDiag += matrix[i][i];
        secondaryDiag += matrix[i][secIndex];
    }
    console.log(`${mainDiag} ${secondaryDiag}`);
}
diagonalSums([[20, 40],
[10, 60]]);