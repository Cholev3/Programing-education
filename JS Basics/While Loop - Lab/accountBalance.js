function accountBalance(input) {
    let index = 0;
    let totalSum = 0;
    let sum = input[index];
    index++


    while (sum !== "NoMoreMoney") {
        let currentSum = Number(sum)
        if (sum < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${currentSum.toFixed(2)}`);
        totalSum += currentSum;
        sum = input[index]
        index++
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);


}
accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"
]);