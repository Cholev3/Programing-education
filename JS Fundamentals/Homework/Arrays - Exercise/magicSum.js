function magicSum(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        let firstNumber = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let secondNumber = arr[j];
            let sum = firstNumber + secondNumber;
            if (sum == num) {
                console.log(`${firstNumber} ${secondNumber}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8);