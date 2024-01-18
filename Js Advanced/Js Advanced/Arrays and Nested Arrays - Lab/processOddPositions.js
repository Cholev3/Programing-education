function processOddPositions(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            newArr.push(arr[i]);
        }
    }

    return newArr.map(el => el * 2).reverse().join(" ");
}
console.log(processOddPositions([10, 15, 20, 25]));