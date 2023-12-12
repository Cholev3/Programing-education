function smallestTwoNumbers(arr) {
    arr = arr.sort((a, b) => a - b);
    let smallestNums = [];
    for (let i = 0; i < 2; i++) {
        let currentNum = arr[i];
        smallestNums.push(currentNum);
    }
    console.log(smallestNums.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);