function sumPrimeNonPrime(input) {
    index = 0;
    let command = input[index];
    let primeNums = 0;
    let complexNums = 0;
    let isComplex = false;

    while (command !== "stop") {
        let currentNum = Number(command);
        if (currentNum < 0) {
            console.log("Number is negative.");
            index++
            command = input[index]
            continue;
        } else {
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i === 0) {
                    isComplex = true;
                    break;
                }
            }
        } if (isComplex) {
            complexNums += currentNum;
            isComplex = false;
        } else {
            primeNums += currentNum;
        }
        index++
        command = input[index];

    }
    console.log(`Sum of all prime numbers is: ${primeNums}`);
    console.log(`Sum of all non prime numbers is: ${complexNums}`);

}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"]);