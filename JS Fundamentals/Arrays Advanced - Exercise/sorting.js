function sorting(arr) {
    let sortedArr = [];
    arr.sort((a, b) => b - a);

    while (arr.length > 0) {
        let highNum = arr.shift();
        sortedArr.push(highNum);
        let lowNum = arr.pop();
        sortedArr.push(lowNum);
    }
    console.log(sortedArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);