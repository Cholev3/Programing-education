function smallestOfThreeNumbers(a, b, c) {
    let smallestNum;
    if ((a == b || a == c || b == c) || (a == b && a == c)) {
        smallestNum = a;
    }
    if (a < b && a < c) {
        smallestNum = a;
    } else if (b < a && b < c) {
        smallestNum = b;
    } else if (c < a && c < b) {
        smallestNum = c;
    }
    console.log(smallestNum);
}
smallestOfThreeNumbers(2, 2, 2);

function minNum(a, b, c) {
    let minNum = Math.min(a, b, c);
    console.log(minNum);

}
minNum(2, 2, 2)
