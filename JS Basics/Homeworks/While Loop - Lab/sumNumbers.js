function sumNumbers(input) {
    let index = 0;
    let number = input[index];
    index++
    let sumOfNumbers = 0;

    while (sumOfNumbers < number) {
        let currentNumber = Number(input[index]);
        index++
        sumOfNumbers = sumOfNumbers + currentNumber


    }
    console.log(sumOfNumbers);


}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"]);