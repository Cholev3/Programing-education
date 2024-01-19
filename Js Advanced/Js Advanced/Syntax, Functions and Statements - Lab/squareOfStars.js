function squareOfStars(num) {
    let result;
    if (num >= Number.MIN_VALUE && num <= Number.MAX_VALUE) {
        for (let i = 0; i < num; i++) {
            result = '* '.repeat(num)
            console.log(result);
        }
    } else {
        for (let i = 0; i < 5; i++) {
            result = '* '.repeat(5)
            console.log(result);
        }
    }
}
squareOfStars(5);