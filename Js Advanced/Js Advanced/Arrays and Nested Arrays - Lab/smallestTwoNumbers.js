function smallestTwoNumbers(arr) {
    let smallestTwo = [];

    for (let i = 0; i < 2; i++) {
        let smallest = Math.min(...arr);
        let index = arr.indexOf(smallest);
        let num = (arr.splice(index, 1)).join('')
        smallestTwo.push(num);
    }

    console.log(smallestTwo.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);