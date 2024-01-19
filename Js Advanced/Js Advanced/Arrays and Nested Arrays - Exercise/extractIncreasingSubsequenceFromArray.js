function extractIncreasingSubsequence(arr) {
    let newArray = [];
    let highestNum = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        if (currentNum >= highestNum) {
            highestNum = currentNum;
            newArray.push(highestNum);
        }
    }

    return newArray;
}
console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));