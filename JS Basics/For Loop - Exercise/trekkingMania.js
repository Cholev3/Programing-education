function trekkingMania(input) {
    let numberOfClimbers = 0;

    let musala = 0;
    let monBlan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let index = 1; index < input.length; index++) {

        let currentNumber = Number(input[index]);

        if (currentNumber <= 5) {
            musala += currentNumber;
        } else if (currentNumber <= 12) {
            monBlan += currentNumber
        } else if (currentNumber <= 25) {
            kilimandjaro += currentNumber
        } else if (currentNumber <= 40) {
            k2 += currentNumber
        } else {
            everest += currentNumber
        }
        numberOfClimbers += currentNumber
    }
    console.log(`${((musala / numberOfClimbers) * 100).toFixed(2)}%`);
    console.log(`${((monBlan / numberOfClimbers) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaro / numberOfClimbers) * 100).toFixed(2)}%`);
    console.log(`${((k2 / numberOfClimbers) * 100).toFixed(2)}%`);
    console.log(`${((everest / numberOfClimbers) * 100).toFixed(2)}%`);


}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);