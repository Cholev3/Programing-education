function palindromeIntegers(arr) {
    for (let num of arr) {
        let reversed = num.toString().split('').reverse().join('');

        if (num == reversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([123, 323, 421, 121]);