function sumOfOddNumbers(n) {
    let sum = 0;
    let a = 1
    for (let i = 1; i <= n; i++) {
        console.log(a);
        sum += a
        a += 2


    }
    console.log(`Sum: ${sum}`);

}
sumOfOddNumbers(5)