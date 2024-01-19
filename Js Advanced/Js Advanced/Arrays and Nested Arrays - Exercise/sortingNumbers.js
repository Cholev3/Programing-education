function sortingNumbers(numsArr) {
    numsArr.sort((a, b) => a - b);
    let sortedArr = [];

    while (numsArr.length > 0) {
        let smallest = numsArr.shift();
        let largest = numsArr.pop();

        sortedArr.push(smallest);
        sortedArr.push(largest);
    }
    return sortedArr;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);