function mergeArrays(arr1, arr2) {
    let mergedArray = [];
    for (let i = 0; i < arr1.length; i++) {
        let currentNumber1 = arr1[i];
        let currentNumber2 = arr2[i];
        if (i % 2 == 0) {
            mergedArray.push(Number(currentNumber1) + Number(currentNumber2))
        } else {
            mergedArray.push(currentNumber1 + currentNumber2);
        }
    }
    console.log(mergedArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);