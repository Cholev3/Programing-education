function maxSecNums(arr) {
    let longestSec = [];

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let currentSec = [currentNum];
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currentNum == nextNum) {
                currentSec.push(nextNum);
            } else {
                break;
            }
        }
        if (currentSec.length > longestSec.length) {
            longestSec = currentSec;
        }
    }
    console.log(longestSec.join(' '));

}
maxSecNums([1, 1, 1, 2, 3, 1, 3, 3]);