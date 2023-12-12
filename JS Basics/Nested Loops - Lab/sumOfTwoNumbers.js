function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let ifFound = false;
    for (let a = start; a <= end; a++) {

        for (let b = start; b <= end; b++) {
            counter++
            if (a + b === magicNumber) {

                ifFound = true;
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
                break;
            }
        }
        if (ifFound) {
            break;
        }
    }
    if (!ifFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }

}
sumOfTwoNumbers(["23",
    "24",
    "20"]);