function firstAndLastKNumbers(arr) {
    let kNum = arr.shift();
    let firstNums = arr.slice(0, kNum).join(' ');
    let lastNums = arr.slice(arr.length - kNum).join(' ')
    console.log(firstNums);
    console.log(lastNums);
}
firstAndLastKNumbers([3,
    6, 7, 8, 9]);