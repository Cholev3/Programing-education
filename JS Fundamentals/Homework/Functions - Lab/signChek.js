function signChek(a, b, c) {
    let isPositive = true;
    let result = ''
    let negativeCount = 0;
    let arr = [a, b, c];
    for (let num of arr) {
        if (num <= 0) {
            negativeCount++
        }
    }
    if (negativeCount % 2 == 0) {
        isPositive;
    } else {
        isPositive = false;
    }
    if (isPositive) {
        result = 'Positive'
    } else {
        result = 'Negative'
    }
    console.log(result);
}
signChek(5, 12, -15);