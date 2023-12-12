function processOddNumbers(arr) {
    let oddIndexes = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (i % 2 != 0) {
            oddIndexes.push(currentNum);
        }
    }
    oddIndexes = oddIndexes.map((a) => a * 2).reverse();
    console.log(oddIndexes.join(' '));
}
processOddNumbers([10, 15, 20, 25]);