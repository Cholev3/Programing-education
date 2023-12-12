function specialNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        let currentNumber = String(i);
        let isSpecial = 'False';
        for (let a = 0; a < currentNumber.length; a++) {
            let number = Number(currentNumber[a]);
            sum += number;
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            isSpecial = 'True';
            console.log(`${currentNumber} -> ${isSpecial}`);
        } else {
            console.log(`${currentNumber} -> ${isSpecial}`);
        }
        sum = 0;
    }
}
specialNumbers(20);