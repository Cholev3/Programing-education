function printAndSum(num1, num2) {
    let sum = 0;
    let space = ''
    for (let i = num1; i <= num2; i++) {
        let currentNumber = Number(i);
        sum += currentNumber;
        space += i + " "

    }
    console.log(space);
    console.log(`Sum: ${sum}`);

}
printAndSum(5, 10)